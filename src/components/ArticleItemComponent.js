import * as ArticleActions from './../actions/ArticleActions';
import { connect } from "react-redux";
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ResponsiveComponent } from "react-native-responsive-ui";
import Card from './Base/Elements/Card/Card'
import { TextView } from './Base/TextView'
import { withNavigation } from 'react-navigation';
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleItemComponent.style'

var DomParser = require('react-native-html-parser').DOMParser;


class ArticleItemComponent extends ResponsiveComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state };
        this.onArticleClicked = this.onArticleClicked.bind(this);
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <TouchableOpacity onPress={this.onArticleClicked}>
                <Card containerStyle={[ui.card, { opacity: this.props.selected ? 0.4 : 1 }]}>
                    <View style={ui.container}>
                        <Image source={{ uri: this.props.article.thumbnail_images.hometile.url }}
                            style={ui.image} />
                        <View style={ui.textcontainer}>
                            <Text style={ui.biggerText}>{this.getTitle()}</Text>
                            <TextView id={this.props.article.id}
                                style={ui.text}
                                ellipsizeMode='tail' numberOfLines={3}>
                                {this.getExcerpt()}
                            </TextView>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }

    onArticleClicked() {
        this.props.onArticleClicked(this.props.article);
        if (this.state.window && this.state.window.width < 700) {
            this.props.navigation.navigate('Article', { title: this.getTitle() })
        }
    }

    getTitle() {
        const entities = require('html-entities').Html5Entities;
        return entities.decode(this.props.article.title_plain);
    }

    getExcerpt() {
        let doc = new DomParser().parseFromString(this.props.article.excerpt, 'text/html')
        return doc.firstChild.textContent;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selected: state.articleReducer.selected ? state.articleReducer.selected.id === ownProps.article.id : false,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onArticleClicked(article) {
            dispatch(ArticleActions.selectArticle(article))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(ArticleItemComponent)));

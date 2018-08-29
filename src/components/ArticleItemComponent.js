import * as ArticleActions from './../actions/ArticleActions';
import { connect } from "react-redux";
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import { ResponsiveComponent, ResponsiveStyleSheet } from "react-native-responsive-ui";
import Card from './Base/Elements/Card/Card'
import { withNavigation } from 'react-navigation';

var DomParser = require('react-native-html-parser').DOMParser;


class ArticleItemComponent extends ResponsiveComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.onArticleClicked = this.onArticleClicked.bind(this);
    }

    render() {
        const { ui } = this;
        return (
            <TouchableOpacity onPress={() => this.onArticleClicked()}>
                <Card containerStyle={{ margin: 6, opacity: this.props.selected ? 0.4 : 1 }}>
                    <View style={ui.container}>
                        <Image source={{ uri: this.props.article.thumbnail_images.hometile.url }}
                            style={ui.image} />
                        <View style={{ marginLeft: 6, flexShrink: 1, display: 'flex' }}>
                            <Text style={styles.biggerText}>{this.getTitle()}</Text>
                            <Text id={this.props.article.id} ellipsizeMode='tail' numberOfLines={3}>{this.getExcerpt()}</Text>
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

    componentDidMount() {
        if (Platform.OS === 'web') {
            window.$clamp(document.getElementById(this.props.article.id), { clamp: 4 });
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

    get ui() {
        return ResponsiveStyleSheet.select([
            {
                query: { maxWidth: 400 },
                style: {
                    container: {
                        display: 'flex', flexDirection: 'column'
                    },
                    image: {
                        width: '100%', height: 120
                    }
                }
            },
            {
                query: { minWidth: 400, maxWidth: 700 },
                style: {
                    container: {
                        display: 'flex', flexDirection: 'row'
                    },
                    image: {
                        width: 120, height: 120
                    }
                }
            },
            {
                query: { minWidth: 700 },
                style: {
                    container: {
                        display: 'flex', flexDirection: 'column'
                    },
                    image: {
                        width: '100%', height: 120
                    }
                }
            }
        ]);
    }
}

const styles = StyleSheet.create({
    biggerText: {
        fontSize: 14,
        fontWeight: '700'
    }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ArticleItemComponent));

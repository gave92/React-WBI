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
import Card from './Base/Elements/Card/Card'

var DomParser = require('react-native-html-parser').DOMParser;

class ArticleItemComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <TouchableOpacity onPress={() => this.props.onArticleClicked(this.props.article)}>
                <Card containerStyle={{ margin: 6, opacity: this.props.selected ? 0.4 : 1 }}>
                    <Image source={{ uri: this.props.article.thumbnail_images.hometile.url }}
                        style={{ width: '100%', height: 150 }} />
                    <Text style={styles.biggerText}>{this.props.article.title_plain}</Text>
                    <Text id={this.props.article.id} ellipsizeMode='tail' numberOfLines={3}>{this.getExcerpt()}</Text>
                </Card>
            </TouchableOpacity>
        );
    }

    componentDidMount() {
        if (Platform.OS === 'web') {
            window.$clamp(document.getElementById(this.props.article.id), {clamp: 4});
        }
    }
    
    getExcerpt() {
        let doc = new DomParser().parseFromString(this.props.article.excerpt, 'text/html')
        return doc.firstChild.textContent;
    }
}

const styles = StyleSheet.create({
    biggerText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 6
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleItemComponent);

import React from 'react';
import ArticleItemComponent from './../components/ArticleItemComponent'
import * as ArticleActions from './../actions/ArticleActions';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

// This is a dumb component that is common for native and web

class ArticleListComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        this.props.loadArticles({ page: 1 })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles !== this.props.articles) {
            if (nextProps.articles) {
                this.props.onArticleClicked(nextProps.articles[0]);
            }
        }
    }

    render() {

        return (
            <View style={styles.container}>
                {this.props.error ? <Text style={styles.biggerText}>{JSON.stringify(this.props.error, null, 2)}</Text> : null}
                <FlatList data={this.props.articles}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => <ArticleItemComponent article={item} />} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexShrink: 0,
        flexGrow: 0,
        width: '30%',
        height: '100%',
        backgroundColor: '#f3f3f3'
    },
    biggerText: {
        fontSize: 14,
    },
});

function mapStateToProps(state, ownProps) {
    return {
        data: state.articleReducer.data,
        articles: state.articleReducer.articles,
        error: state.articleReducer.error,
        selected: state.articleReducer.selected,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onArticleClicked(article) {
            dispatch(ArticleActions.selectArticle(article))
        },
        loadArticles(args) {
            dispatch(ArticleActions.fetchAllArticles(args))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);


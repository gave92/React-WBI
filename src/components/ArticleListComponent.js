import React from 'react';
import ArticleItemComponent from './../components/ArticleItemComponent'
import * as ArticleActions from './../actions/ArticleActions';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { ResponsiveComponent, ResponsiveStyleSheet } from "react-native-responsive-ui";


class ArticleListComponent extends ResponsiveComponent {
    static defaultProps = {
        refreshing: false
    };
    
    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state, page: 1 };        
        this.onLoadMore = this.onLoadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticles({ page: this.state.page })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles !== this.props.articles) {
            if (nextProps.articles && !nextProps.selected) {
                this.props.onArticleClicked(nextProps.articles[0]);
            }
        }
    }

    render() {
        const { ui } = this;
        return (
            <View style={ui.container}>
                {this.props.error ? <Text style={styles.biggerText}>{JSON.stringify(this.props.error, null, 2)}</Text> : null}
                <FlatList data={this.props.articles}
                    keyExtractor={(item, index) => item.id.toString()}
                    numColumns={1}
                    ListFooterComponent={this.renderFooter}
                    renderItem={({ item }) => <ArticleItemComponent article={item} />}
                    onEndReached={this.onLoadMore}
                    onEndThreshold={0}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.refreshing}
                            onRefresh={this.onRefresh} />}
                />
            </View>
        );
    }

    onLoadMore() {
        this.setState({ page: this.state.page + 1 },
            () => this.props.fetchArticles({ page: this.state.page }))
    }

    onRefresh = () => {
        this.setState({ page: 1 },
            () => this.props.refreshArticles({ page: this.state.page }))
    }

    renderFooter = () => {
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    get ui() {
        return ResponsiveStyleSheet.select([
            {
                query: { minWidth: 0 },
                style: {
                    container: {
                        display: 'flex',
                        flexShrink: 0,
                        flexGrow: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#E9E9EF'
                    }
                },
            },
            {
                query: { minWidth: 700 },
                style: {
                    container: {
                        display: 'flex',
                        flexShrink: 0,
                        flexGrow: 0,
                        width: '30%',
                        maxWidth: 700,
                        minWidth: 270,
                        height: '100%',
                        backgroundColor: '#E9E9EF'
                    }
                },
            }
        ]);
    }
}

const styles = StyleSheet.create({
    biggerText: {
        fontSize: 14,
    }
});

function mapStateToProps(state, ownProps) {
    return {
        data: state.articleReducer.data,
        articles: state.articleReducer.articles,
        error: state.articleReducer.error,
        selected: state.articleReducer.selected,
        refreshing: state.articleReducer.isloading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onArticleClicked(article) {
            dispatch(ArticleActions.selectArticle(article))
        },
        fetchArticles(args) {
            dispatch(ArticleActions.fetchArticles(args))
        },
        refreshArticles(args) {
            dispatch(ArticleActions.refreshArticles(args))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);


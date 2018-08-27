import React from 'react';
import { connect } from "react-redux";
import * as ArticleActions from './../actions/ArticleActions';
import {
    StyleSheet,
    View,
} from 'react-native';
import ArticleListComponent from './../components/ArticleListComponent'
import ArticleDetailComponent from './../components/ArticleDetailComponent'
import AppHeaderComponent from '../components/AppHeaderComponent';


class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                <AppHeaderComponent />
                <View style={styles.masterdetail}>
                    <ArticleListComponent articles={this.props.articles}
                        error={this.props.error} />
                    <ArticleDetailComponent />
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.props.loadArticles({ page: 1 })
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    masterdetail: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        height: 0
    }
});

function mapStateToProps(state) {
    return {
        data: state.articleReducer.data,
        articles: state.articleReducer.articles,
        error: state.articleReducer.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadArticles(args) {
            dispatch(ArticleActions.fetchAllArticles(args))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryScreen);


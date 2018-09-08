import React from 'react';
import * as CommentsActions from './../actions/CommentsActions';
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/CommentsListComponent.style'
import CommentItemComponent from './CommentItemComponent';


class ArticleDetailComponent extends React.Component {
    static defaultProps = {
        refreshing: false,
        cursor: undefined
    };

    constructor(props, context) {
        super(props, context);
        this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
        this.onLoadMore = this.onLoadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            this.props.article ?
                <View style={ui.container}>
                    <View style={ui.topbar}>
                        {this.props.navigation.state.routeName !== 'Home' ?
                            <TouchableOpacity onPress={this.onBackButtonClicked}>
                                <IconMaterial name="arrow-back" size={24} color={ui.backbutton.color}
                                    style={ui.backbutton} />
                            </TouchableOpacity> : null
                        }
                        <Text numberOfLines={1} style={ui.title}>{this.props.article.title_plain}</Text>
                    </View>

                    <FlatList data={this.props.comments[this.props.article.id]}
                        keyExtractor={(item, index) => item.id.toString()}
                        numColumns={1}
                        ListFooterComponent={this.renderFooter(ui)}
                        renderItem={({ item }) => <CommentItemComponent comment={item} />}
                        onEndReached={this.onLoadMore}
                        onEndThreshold={0}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.refreshing}
                                onRefresh={this.onRefresh} />} />
                </View> : null
        );
    }

    renderFooter = (ui) => {
        return () => {
            return (
                <View
                    style={{
                        paddingVertical: 20
                    }}>
                    {this.props.error ? <Text style={[ui.biggerText, ui.centered]}>{this.props.error}</Text>
                        : this.props.cursor && !this.props.cursor.hasNext ? null : <ActivityIndicator animating size="large" />}
                </View>
            );
        }
    };

    onLoadMore() {
        if (this.props.cursor.hasNext) {
            this.props.fetchComments({ url: this.props.article.url, id: this.props.article.id, limit: 20, cursor: this.props.cursor })
        }
    }

    onRefresh = () => {
        this.props.refreshComments({ url: this.props.article.url, id: this.props.article.id, limit: 20 })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.refreshComments({ url: this.props.article.url, id: this.props.article.id, limit: 20 })
        });
    }

    onBackButtonClicked() {
        this.props.navigation.goBack();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        article: state.articleReducer.selected,
        error: state.commentsReducer.error,
        cursor: state.commentsReducer.cursor,
        refreshing: state.commentsReducer.isloading,
        comments: state.commentsReducer.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        refreshComments(args) {
            dispatch(CommentsActions.refreshComments(args))
        },
        fetchComments(args) {
            dispatch(CommentsActions.fetchComments(args))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(ArticleDetailComponent)));

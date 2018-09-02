import React from 'react';
import ArticleItemComponent from './../components/ArticleItemComponent'
import * as ArticleActions from './../actions/ArticleActions';
import { connect } from "react-redux";
import {
    Text,
    View,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import ModalDropdown from './Base/ModalDropdown'
import SearchBar from './Base/Elements/searchbar/SearchBar'
import { withNavigation } from 'react-navigation';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ResponsiveComponent, MediaQuery } from "react-native-responsive-ui";
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleListComponent.style'


const categories = ['Tutti','Windows','Windows phone','Surface','Lumia','Aggiornamenti'];

class ArticleListComponent extends ResponsiveComponent {
    static defaultProps = {
        refreshing: false
    };

    constructor(props, context) {
        super(props, context);
        this.state = { ...this.state, page: 1 };
        this.onLoadMore = this.onLoadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.onHamburgerPressed = this.onHamburgerPressed.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
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

    setRef = ref => this.searchRef = ref;

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <View style={ui.container}>
                <MediaQuery platform='windows'>
                    <View style={{ height: 36 }}>
                        <Text numberOfLines={1} style={ui.appname}>WindowsBlogItalia</Text>
                    </View>
                </MediaQuery>
                <View style={ui.topbar}>
                    <TouchableOpacity onPress={this.onHamburgerPressed}>
                        <IconOcticons name="three-bars" size={24} color={ui.button.color}
                            style={ui.button} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[ui.title, ui.centered]}>WindowsBlogItalia</Text>
                    <ModalDropdown options={categories} dropdownStyle={{ width: 150 }}>
                        <IconMaterialCommunity name="filter-outline" size={24} color={ui.button.color}
                            style={ui.button} />
                    </ModalDropdown>
                </View>

                {this.props.error && <Text style={[ui.biggerText, ui.centered]}>{this.props.error}</Text>}

                {!this.props.error && <SearchBar lightTheme={this.props.theme !== 'dark'}
                    ref={this.setRef}
                    onChangeText={this.onChangeText}
                    platform="default"
                    placeholder='Search articles...' />}

                {!this.props.error && <FlatList data={this.props.articles}
                    keyExtractor={(item, index) => item.id.toString()}
                    numColumns={1}
                    ListFooterComponent={this.renderFooter}
                    renderItem={({ item }) => <ArticleItemComponent article={item} />}
                    onEndReached={this.onLoadMore}
                    onEndThreshold={0}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.refreshing}
                            onRefresh={this.onRefresh} />} />}
            </View>
        );
    }

    onChangeText(text) {

    }

    onHamburgerPressed() {
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
                    paddingVertical: 20
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(withTheme(ArticleListComponent)));


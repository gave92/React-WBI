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
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { ResponsiveComponent } from "react-native-responsive-ui";
import withTheme from "./Base/ThemableComponent";
import { getResponsiveStyle } from './../styles/ArticleListComponent.style'


const categories = ['Tutti', 'Windows', 'Windows phone', 'Surface', 'Lumia', 'Aggiornamenti'];

class ArticleListComponent extends ResponsiveComponent {
    static defaultProps = {
        refreshing: false,
        page: 1
    };

    constructor(props, context) {
        super(props, context);
        this.onLoadMore = this.onLoadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.onHamburgerPressed = this.onHamburgerPressed.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    componentDidMount() {
        if (this.props.page === 1) {
            this.props.fetchArticles({ page: this.props.page })
        }
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

                {!this.props.error && <SearchBar lightTheme={this.props.theme !== 'dark'}
                    ref={this.setRef}
                    onChangeText={this.onChangeText}
                    platform="default"
                    placeholder='Search articles...' />}

                {this.props.error && <Text style={[ui.biggerText, ui.centered]}>{this.props.error}</Text>}

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
            </View>
        );
    }

    onChangeText(text) {

    }

    onHamburgerPressed() {
        this.props.rootNavigation.openDrawer();
    }

    onLoadMore() {
        this.props.fetchArticles({ page: this.props.page })
    }

    onRefresh = () => {
        this.props.refreshArticles()
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
        page: state.articleReducer.page,
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
            dispatch(ArticleActions.refreshArticles())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ArticleListComponent));


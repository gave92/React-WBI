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


const categories = [
    { name: 'Tutti', tag: 'store-update', exclude: true },
    { name: 'Windows', tag: 'windows-10' },
    { name: 'Windows phone', tag: 'windows-10-mobile' },
    { name: 'Surface', tag: 'surface' },
    { name: 'Lumia', tag: 'lumia' },
    { name: 'Aggiornamenti', tag: 'store-update' }];

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
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        if (!this.props.category) {
            this.props.setArticleFilter(categories[0])
        }
        if (this.props.page === 1) {
            this.props.refreshArticles()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.filtered !== this.props.filtered) {
            if (nextProps.filtered && !nextProps.selected) {
                this.props.onArticleClicked(nextProps.filtered[0]);
            }
        }
    }

    setRef = ref => this.searchRef = ref;

    render() {
        const ui = getResponsiveStyle(this.props.theme);
        return (
            <View style={ui.container}>
                <FlatList data={this.props.filtered}
                    keyExtractor={(item, index) => item.id.toString()}
                    numColumns={1}
                    ListFooterComponent={this.renderFooter(ui)}
                    renderItem={({ item }) => <ArticleItemComponent article={item} />}
                    onEndReached={this.onLoadMore}
                    onEndThreshold={0}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.refreshing}
                            onRefresh={this.onRefresh} />} />

                <SearchBar lightTheme={this.props.theme !== 'dark'}
                    ref={this.setRef}
                    onChangeText={this.onChangeText}
                    platform="default"
                    placeholder='Search articles...' />

                <View style={ui.topbar}>
                    <TouchableOpacity onPress={this.onHamburgerPressed}>
                        <IconOcticons name="three-bars" size={24} color={ui.button.color}
                            style={ui.button} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[ui.title, ui.centered]}>WindowsBlogItalia</Text>
                    <ModalDropdown options={categories.map(c => c.name)}
                        dropdownStyle={{ width: 150 }}
                        onSelect={this.onSelect}>
                        <IconMaterialCommunity name="filter-outline" size={24} color={ui.button.color}
                            style={ui.button} />
                    </ModalDropdown>
                </View>
            </View>
        );
    }

    onChangeText(text) {

    }

    onSelect(idx, value) {
        if (idx < 0) return;
        this.props.setArticleFilter(categories[idx]);
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

    renderFooter = (ui) => {
        return () => {
            return (
                <View
                    style={{
                        paddingVertical: 20
                    }}>
                    {this.props.error ? <Text style={[ui.biggerText, ui.centered]}>{this.props.error}</Text>
                        : <ActivityIndicator animating size="large" />}
                </View>
            );
        }
    };
}

function mapStateToProps(state, ownProps) {
    return {
        filtered: state.articleReducer.filtered,
        category: state.articleReducer.category,
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
        refreshArticles() {
            dispatch(ArticleActions.refreshArticles())
        },
        setArticleFilter(args) {
            dispatch(ArticleActions.setArticleFilter(args))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ArticleListComponent));


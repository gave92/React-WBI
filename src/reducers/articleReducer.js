/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { articles: [], page: 1, filtered: [] };

const getFilteredArticles = (articles, category) => {
    if (!category) return articles;
    if (category.exclude) {
        return articles.filter(e => !e.categories.some(c => c.slug === category.tag))
    }
    return articles.filter(e => e.categories.some(c => c.slug === category.tag))
}


export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case types.ARTICLES_FETCHED:
            let newArticles = action.articles.filter(e1 => !state.articles.some(e2 => e1.id === e2.id));
            return {
                ...state,
                data: action.data,
                page: state.page + 1,
                articles: [...state.articles, ...newArticles],
                filtered: [...state.filtered, ...getFilteredArticles(newArticles, state.category)],
                error: undefined
            };
        case types.ARTICLES_FETCHING_ERROR:
            return {
                ...state,
                error: action.error
            };
        case types.ARTICLES_REFRESHED:
            return {
                ...state,
                data: action.data,
                page: 1,
                articles: action.articles,
                filtered: getFilteredArticles(action.articles, state.category),
                error: undefined
            };
        case types.ARTICLES_FILTER_CHANGED:
            if (state.category !== action.category) {
                return {
                    ...state,
                    category: action.category,
                    filtered: getFilteredArticles(state.articles, action.category)
                };
            }
            return state;
        case types.GUI_ARTICLE_SELECTED:
            return {
                ...state,
                selected: action.article
            };
        case types.GUI_IS_LOADING:
            return {
                ...state,
                isloading: action.isloading,
            };
        default:
            return state;
    }
}

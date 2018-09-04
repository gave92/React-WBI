/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { articles: [], page: 1 };

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case types.ARTICLES_FETCHED:
            let newArticles = action.articles.filter(e1 => !state.articles.some(e2 => e1.id === e2.id));
            return {
                ...state,
                data: action.data,
                page: state.page + 1,
                articles: [...state.articles, ...newArticles],
                filtered: state.filterTag ? [...state.filtered, ...newArticles.filter(e => e.categories.some(c => c.slug === state.filterTag))] : [...state.articles, ...newArticles]
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
                filtered: state.filterTag ? action.articles.filter(e => e.categories.some(c => c.slug === state.filterTag)) : action.articles
            };
        case types.ARTICLES_FILTER_CHANGED:
            if (state.filterTag !== action.filterTag) {
                return {
                    ...state,
                    filterTag: action.filterTag,
                    filtered: action.filterTag ? state.articles.filter(e => e.categories.some(c => c.slug === action.filterTag)) : state.articles
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

/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { articles: [], page: 1 };

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case types.ARTICLES_FETCHED:
            return {
                ...state,
                data: action.data,
                page: state.page + 1,
                articles: [...state.articles, ...action.articles.filter(e1 => !state.articles.some(e2 => e1.id === e2.id))]
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
                articles: action.articles
            };
        case types.GUI_ARTICLE_SELECTED:
            return {
                ...state,
                selected: action.article
            }
        case types.GUI_IS_LOADING:
            return {
                ...state,
                isloading: action.isloading,
            };
        default:
            return state;
    }
}

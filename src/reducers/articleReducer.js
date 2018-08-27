/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";


export default function articleReducer(state = {}, action) {
    switch (action.type) {
        case types.GUI_ARTICLE_SELECTED:
            return {
                ...state,
                selected: action.article
            }
        case types.ARTICLES_FETCHED:
            return {
                ...state,
                data: action.data,
                articles: action.articles
            };
        case types.ARTICLES_FETCHING_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}
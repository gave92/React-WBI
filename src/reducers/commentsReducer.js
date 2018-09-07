/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { comments: {} };

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case types.DISQUS_COMMENTS_FETCHED:
            return {
                ...state,
                data: action.data,
                cursor: action.cursor,
                comments: { ...state.comments, [action.id.toString()]: [...state.comments[action.id.toString()], ...action.comments] },
                error: undefined
            };
        case types.DISQUS_COMMENTS_REFRESHED:
            return {
                ...state,
                data: action.data,
                cursor: action.cursor,
                comments: { ...state.comments, [action.id.toString()]: action.comments },
                error: undefined
            };
        case types.DISQUS_COMMENTS_FETCHING_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

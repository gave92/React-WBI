/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";
import getThreadedComments from "./../helpers/Thread"

const initialState = { comments: {}, thread: {} };


export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case types.DISQUS_COMMENTS_FETCHED:
            let newComments = action.comments.filter(e1 => !state.comments[action.id.toString()].some(e2 => e1.id === e2.id));
            return {
                ...state,
                data: action.data,
                cursor: action.cursor,
                comments: { ...state.comments, [action.id.toString()]: [...state.comments[action.id.toString()], ...newComments] },
                thread: { ...state.thread, [action.id.toString()]: getThreadedComments([...state.comments[action.id.toString()], ...newComments]) },
                error: undefined
            };
        case types.DISQUS_COMMENTS_REFRESHED:
            return {
                ...state,
                data: action.data,
                cursor: action.cursor,
                comments: { ...state.comments, [action.id.toString()]: action.comments },
                thread: { ...state.thread, [action.id.toString()]: getThreadedComments(action.comments) },
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

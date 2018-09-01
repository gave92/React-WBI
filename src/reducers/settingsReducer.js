/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { theme: 'dark' };

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GUI_SET_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }
}

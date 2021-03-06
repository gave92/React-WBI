/**
 * Created by amoghbanta on 04/02/17.
 */
import * as types from "../actions/ActionTypes";

const initialState = { theme: 'default', notifications: true };

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GUI_SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications,
            };
        case types.GUI_SET_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        default:
            return state;
    }
}

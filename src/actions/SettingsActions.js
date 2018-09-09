import * as types from "./ActionTypes";


export function setTheme(theme) {
    return (dispatch) => {
        dispatch({ type: types.GUI_SET_THEME, theme: theme })
    }
}

export function setNotifications(active) {
    return (dispatch) => {
        dispatch({ type: types.GUI_SET_NOTIFICATIONS, notifications: active })
    }
}
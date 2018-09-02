import * as types from "./ActionTypes";


export function setTheme(theme) {
    return (dispatch) => {
        dispatch({ type: types.GUI_SET_THEME, theme: theme })
    }
}

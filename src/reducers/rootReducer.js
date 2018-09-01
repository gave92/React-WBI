/**
 * Created by amoghbanta on 04/02/17.
 */
import {combineReducers} from "redux";
import ArticleReducer from "./articleReducer";
import SettingsReducer from "./settingsReducer";


//this is the list of final reducers
export default combineReducers({
    articleReducer: ArticleReducer,
    settingsReducer: SettingsReducer,
})
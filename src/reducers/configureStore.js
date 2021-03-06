import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";
import ArticleReducer from "./articleReducer";
import SettingsReducer from "./settingsReducer";
import CommentsReducer from "./commentsReducer";

const persistConfig = {
    key: 'rootReducer',
    storage,
    blacklist: ['settingsReducer', 'articleReducer', 'commentsReducer']
}
const persistSettingsConfig = {
    key: 'settingsReducer',
    storage,
    blacklist: []
}
const persistCommentsConfig = {
    key: 'commentsReducer',
    storage,
    whitelist: ['token']
}
const persistArticleConfig = {
    key: 'articleReducer',
    storage,
    whitelist: ['data', 'articles']
}

//this is the list of final reducers
const rootReducer = combineReducers({
    articleReducer: persistReducer(persistArticleConfig, ArticleReducer),
    settingsReducer: persistReducer(persistSettingsConfig, SettingsReducer),
    commentsReducer: persistReducer(persistCommentsConfig, CommentsReducer),
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

export default () => {
    let store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
    let persistor = persistStore(store);
    return { store, persistor }
}

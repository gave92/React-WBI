import axios from 'react-native-axios';
import * as types from "./ActionTypes";


export function fetchArticles(args) {
    return (dispatch) => {
        axios.get(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        //fetch(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        .then(response => {            
            dispatch({type: types.ARTICLES_FETCHED, data: response.data, articles: response.data.posts})
        })
        .catch(error => {
            dispatch({type: types.ARTICLES_FETCHING_ERROR, error: error.message})
        })
        
        // let obj = require('./../assets/OfflineArticles.json')
        // dispatch({ type: types.ARTICLES_FETCHED, data: obj, articles: obj.posts })
    }
}

export function refreshArticles(args) {
    return (dispatch) => {
        dispatch({type: types.GUI_IS_LOADING, isloading: true})
        axios.get(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        //fetch(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        .then(response => {
            dispatch({type: types.GUI_IS_LOADING, isloading: false})
            dispatch({type: types.ARTICLES_REFRESHED, data: response.data, articles: response.data.posts})
        })
        .catch(error => {
            dispatch({type: types.GUI_IS_LOADING, isloading: false})
            dispatch({type: types.ARTICLES_FETCHING_ERROR, error: error.message})
        })
        
        // let obj = require('./../assets/OfflineArticles.json')
        // dispatch({ type: types.ARTICLES_FETCHED, data: obj, articles: obj.posts })
    }
}

export function selectArticle(article) {
    return (dispatch) => {
        dispatch({ type: types.GUI_ARTICLE_SELECTED, article: article })
    }
}

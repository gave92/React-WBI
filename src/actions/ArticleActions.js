// import axios from 'react-native-axios';
import * as types from "./ActionTypes";


export function fetchArticles(args) {
    return (dispatch) => {
        // axios.get(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        fetch(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new TypeError(`Invalid reponse: ${response.status}`)
            })
            .then(data => {
                // alert(data.toSource())
                dispatch({ type: types.ARTICLES_FETCHED, data: data, articles: data.posts })
            })
            .catch(error => {
                dispatch({ type: types.ARTICLES_FETCHING_ERROR, error: error.message })
                // let obj = require('./../assets/OfflineArticles.json')
                // dispatch({ type: types.ARTICLES_FETCHED, data: obj, articles: obj.posts })
            })
    }
}

export function refreshArticles() {
    return (dispatch) => {
        dispatch({ type: types.GUI_IS_LOADING, isloading: true })
        // axios.get(`https://www.windowsblogitalia.com/?json=1&count=20&page=1`)
        fetch(`https://www.windowsblogitalia.com/?json=1&count=20&page=1`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new TypeError(`Invalid reponse: ${response.status}`)
            })
            .then(data => {
                dispatch({ type: types.GUI_IS_LOADING, isloading: false })
                dispatch({ type: types.ARTICLES_REFRESHED, data: data, articles: data.posts })
            })
            .catch(error => {
                dispatch({ type: types.GUI_IS_LOADING, isloading: false })
                dispatch({ type: types.ARTICLES_FETCHING_ERROR, error: error.message })
            })
    }
}

export function selectArticle(article) {
    return (dispatch) => {
        dispatch({ type: types.GUI_ARTICLE_SELECTED, article: article })
    }
}

export function setArticleFilter(args) {
    return (dispatch) => {
        dispatch({ type: types.ARTICLES_FILTER_CHANGED, filterTag: args.tag })
    }
}

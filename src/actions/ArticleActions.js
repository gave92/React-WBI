// import axios from 'react-native-axios';
import * as types from "./ActionTypes";

// This is a dumb action just for wire framing purpose
// All your login and processing should go in actions, the should be thick
// example: make a network request, and dispatch the received payload to redux store

export function fetchAllArticles(args) {
    return (dispatch) => {
        /*
        // axios.get(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        fetch(`https://www.windowsblogitalia.com/?json=1&count=20&page=${args.page}`)
        .then(response => {
            dispatch({type: types.ARTICLES_FETCHED, data: response.data, articles: response.data.posts})
        })
        .catch(error => {
            dispatch({type: types.ARTICLES_FETCHING_ERROR, error: error.message})
        })
        */
        
        let obj = require('./../assets/OfflineArticles.json')
        dispatch({ type: types.ARTICLES_FETCHED, data: obj, articles: obj.posts })
    }
}

export function selectArticle(article) {
    return (dispatch) => {
        dispatch({ type: types.GUI_ARTICLE_SELECTED, article: article })
    }
}

import { Platform } from 'react-native';
// import axios from 'react-native-axios';
import * as types from "./ActionTypes";

const cors_url = Platform.OS === 'web' ? 'https://cors-anywhere.herokuapp.com/' : '';
const api_key = 'W2vEqH73EyrJfEMbwD7SunUxMVEfq8iyWSdFJMCe3dRHKdomcovikpCw9Gkq4a6I';

export function refreshComments(args) {
    return (dispatch) => {
        dispatch({ type: types.DISQUS_IS_LOADING, isloading: true })
        let request_url = `${cors_url}https://disqus.com/api/3.0/threads/listPosts.json?api_key=${api_key}&forum=windows8italia&limit=${args.limit}&include=approved&order=desc&thread:link=${args.url}`;
        //if (args.cursor != null) request_url += `&cursor=${args.cursor.next}`;
        //axios.get(request_url)
        fetch(request_url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new TypeError(`Invalid reponse: ${response.status}`)
            })
            .then(data => {
                // alert(data.toSource())
                dispatch({ type: types.DISQUS_IS_LOADING, isloading: false })
                dispatch({ type: types.DISQUS_COMMENTS_REFRESHED, data: data, id: args.id, cursor: data.cursor, comments: data.response })
            })
            .catch(error => {
                dispatch({ type: types.DISQUS_IS_LOADING, isloading: false })
                dispatch({ type: types.DISQUS_COMMENTS_FETCHING_ERROR, error: error.message })
            })
    }
}

export function fetchComments(args) {
    return (dispatch) => {
        let request_url = `${cors_url}https://disqus.com/api/3.0/threads/listPosts.json?api_key=${api_key}&forum=windows8italia&limit=${args.limit}&include=approved&order=desc&thread:link=${args.url}`;
        if (args.cursor != null) request_url += `&cursor=${args.cursor.next}`;
        //axios.get(request_url)
        fetch(request_url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new TypeError(`Invalid reponse: ${response.status}`)
            })
            .then(data => {
                // alert(data.toSource())
                dispatch({ type: types.DISQUS_COMMENTS_FETCHED, data: data, id: args.id, cursor: data.cursor, comments: data.response })
            })
            .catch(error => {
                dispatch({ type: types.DISQUS_COMMENTS_FETCHING_ERROR, error: error.message })
            })
    }
}

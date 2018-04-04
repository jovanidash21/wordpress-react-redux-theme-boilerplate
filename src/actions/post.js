import axios from 'axios';
import {
  FETCH_POSTS,
  FETCH_POST
} from '../constants/post';

export function fetchPosts(postType) {
  return dispatch => {
    return dispatch({
      type: FETCH_POSTS,
      payload: axios.get(`/wp-json/wp/v2/${postType}`),
      meta: postType
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

export function fetchPost(postType, slug) {
  return dispatch => {
    return dispatch({
      type: FETCH_POST,
      payload: axios.get(`/wp-json/wp/v2/${postType}/?slug=${slug}`)
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

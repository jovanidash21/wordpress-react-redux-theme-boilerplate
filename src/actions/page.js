import axios from 'axios';
import {
  FETCH_PAGES,
  FETCH_PAGE
} from '../constants/page';

export function fetchPages() {
  return dispatch => {
    return dispatch({
      type: FETCH_PAGES,
      payload: axios.get('/wp-json/wp/v2/pages')
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

export function fetchPage(slug) {
  return dispatch => {
    return dispatch({
      type: FETCH_PAGE,
      payload: axios.get(`/wp-json/wp/v2/pages/?slug=${slug}`),
      meta: slug
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

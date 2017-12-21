import axios from 'axios';
import { FETCH_MENU } from '../constants/menu';

export function fetchMenu(location) {
  return dispatch => {
    return dispatch({
      type: FETCH_MENU,
      payload: axios.get(`/wp-json/wp/v2/menus/${location}`),
      meta: location
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

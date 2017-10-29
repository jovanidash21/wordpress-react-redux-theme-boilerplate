import axios from 'axios';
import { FETCH_MENU } from '../constants/menu';

export function fetchMenu(location) {
  return dispatch => {
    return dispatch({
      type: FETCH_MENU,
      payload: axios.get(`/wp-json/wp-api-menus/v2/menu-locations/${location}`),
      meta: location
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}
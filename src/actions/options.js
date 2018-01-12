import axios from 'axios';
import { FETCH_OPTIONS } from '../constants/options';

export function fetchOptions() {
  return dispatch => {
    return dispatch({
      type: FETCH_OPTIONS,
      payload: axios.get('/wp-json/acf/v2/options')
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
      }
    });
  }
}

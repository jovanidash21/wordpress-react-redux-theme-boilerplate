import {
  FETCH_POSTS,
  FETCH_POST
} from '../constants/post';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const post = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_POSTS}_LOADING`:
    case `${FETCH_POST}_LOADING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_POSTS}_SUCCESS`:
    case `${FETCH_POST}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case `${FETCH_POSTS}_ERROR`:
    case `${FETCH_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

export default post;

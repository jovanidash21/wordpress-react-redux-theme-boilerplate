import { FETCH_OPTIONS } from '../constants/options';

const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};

const options = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_OPTIONS}_LOADING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_OPTIONS}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload.data
      };
    case `${FETCH_OPTIONS}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

export default options;

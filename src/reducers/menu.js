import { FETCH_MENU } from '../constants/menu';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const menu = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_MENU}_LOADING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_MENU}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data,
          {
            menuLocation: action.meta,
            menuStructure: action.payload.data
          }
        ]
      };
    case `${FETCH_MENU}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

export default menu;
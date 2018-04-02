import { FETCH_MENU } from '../constants/menu';

const initialState = {
  isLoading: false,
  isError: false,
  menus: {}
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
        menus: {
          ...state.menus,
          [action.meta]: action.payload.data
        }
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

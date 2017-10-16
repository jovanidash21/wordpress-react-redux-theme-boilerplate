import { 
  FETCH_PAGES,
  FETCH_PAGE
} from '../constants/page';

const initialState = {
  isLoading: false,
  isError: false,
  data: null
};

const page = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_PAGES}_LOADING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_PAGES}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case `${FETCH_PAGES}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case `${FETCH_PAGE}_LOADING`:
      return {
        ...state,
        isLoading: true
      };
    case `${FETCH_PAGE}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case `${FETCH_PAGE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

export default page;
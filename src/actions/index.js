import { bindActionCreators } from 'redux';
import { fetchMenu } from './menu';
import {
  fetchPages,
  fetchPage
} from './page';
import {
  fetchPosts,
  fetchPost
} from './post';

const actions = (dispatch) => {
  return bindActionCreators({
    fetchMenu,
    fetchPages,
    fetchPage,
    fetchPosts,
    fetchPost
  }, dispatch);
}

export default actions;

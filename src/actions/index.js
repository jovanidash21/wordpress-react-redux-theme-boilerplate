import { bindActionCreators } from 'redux';
import { fetchOptions } from './options';
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
    fetchOptions,
    fetchMenu,
    fetchPages,
    fetchPage,
    fetchPosts,
    fetchPost
  }, dispatch);
}

export default actions;

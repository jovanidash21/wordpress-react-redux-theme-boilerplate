import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';
import PostList from '../../components/Post/PostList';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {
      fetchPage,
      fetchPosts
    } = this.props;

    fetchPage('work');
    fetchPosts('work');
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | ${WP_REACT_REDUX.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const {
      page,
      post
    } = this.props;

    return (
      <div>
        {::this.handleHeadData('Work')}
        <div className="container">
          <Jumbotron>
            {
              page.data &&
              page.data.map((data, i) =>
                <div key={i}>
                  <h2 className="display-3">
                    {data.title.rendered}
                  </h2>
                  <hr className="my-2" />
                  {ReactHtmlParser(data.content.rendered)}
                </div>
              )
            }
            {
              post.data &&
              <div>
                <hr className="my-2" />
                <h3>Work List</h3>
                <PostList post={post} />
              </div>
            }
          </Jumbotron>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    post: state.post
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);

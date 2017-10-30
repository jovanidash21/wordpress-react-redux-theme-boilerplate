import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { fetchPage } from '../../actions/page';
import { fetchPosts } from '../../actions/post';
import Head from '../../components/Head';
import PostList from '../../components/Post/PostList';

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchPage('work'));
    this.props.dispatch(fetchPosts('work'));
  }
  render() {
    const {
      page,
      post
    } = this.props;
    const title = `${WP_REACT_REDUX.siteName} | Work`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <Jumbotron>
            {
              page.data.length
                ?
                page.data.map((data, i) =>
                  <div key={i}>
                    <h2 className="display-3">
                      {data.title.rendered}
                    </h2>
                    <hr className="my-2" />
                    {ReactHtmlParser(data.content.rendered)}
                  </div>
                )
                : ''
            }
            {
              post.data.length
                ?
                <div>
                  <hr className="my-2" />
                  <h3>Work List</h3>
                  <PostList post={post} />
                </div>
                : ''
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
  mapStateToProps
)(Work);

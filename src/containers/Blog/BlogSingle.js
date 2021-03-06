import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';

class BlogSingle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {
      match,
      fetchPost
    } = this.props;

    fetchPost('blog', match.params.slug);
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | Blog | ${WP_REACT_REDUX.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="container">
          <Jumbotron>
            {
              post.singlePost.length > 0 &&
              post.singlePost.map((postData, i) =>
                <div key={i}>
                  <h3>Blog</h3>
                  <hr className="my-2" />
                  <h2 className="display-3">
                    {postData.title.rendered}
                    {::this.handleHeadData(postData.title.rendered)}
                  </h2>
                  <hr className="my-2" />
                  {ReactHtmlParser(postData.content.rendered)}
                </div>
              )
            }
          </Jumbotron>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSingle);

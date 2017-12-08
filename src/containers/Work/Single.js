import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { fetchPost } from '../../actions/post';
import Head from '../../components/Head';

class WorkSingle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchPost('work', this.props.match.params.slug));
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | Work | ${WP_REACT_REDUX.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { post } = this.props;
    const title = `${WP_REACT_REDUX.siteName} | Work`;

    return (
      <div>
        <div className="container">
          <Jumbotron>
            {
              post.data &&
              post.data.map((data, i) =>
                <div key={i}>
                  <h3>Work</h3>
                  <hr className="my-2" />
                  <h2 className="display-3">
                    {data.title.rendered}
                    {::this.handleHeadData(data.title.rendered)}
                  </h2>
                  <hr className="my-2" />
                  {ReactHtmlParser(data.content.rendered)}
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
  mapStateToProps
)(WorkSingle);

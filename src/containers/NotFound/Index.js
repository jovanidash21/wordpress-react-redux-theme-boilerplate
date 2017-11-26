import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import Head from '../../components/Head';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | ${WP_REACT_REDUX.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { page } = this.props;

    return (
      <div>
        {::this.handleHeadData('Page Not Found')}
        <div className="container">
          <Alert className="text-center" color="danger">
            <h2 className="display-3">
              Sorry, but the page you are looking for does not exist.
            </h2>
          </Alert>
        </div>
      </div>
    )
  }
}

export default connect()(NotFound);

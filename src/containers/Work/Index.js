import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Work extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | Work`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <h2>Work</h2>
        </div>
      </div>
    )
  }
}

export default connect()(Work);

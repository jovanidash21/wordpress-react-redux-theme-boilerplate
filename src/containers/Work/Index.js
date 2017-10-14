import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Work extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | Work`;

    return (
      <div>
        <Head title={title} />
        <h1>Work</h1>
      </div>
    )
  }
}

export default connect()(Work);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Home extends Component {
  render() {
    return (
      <div>
        <Head title="`${WP_REACT_REDUX.siteName} | ${WP_REACT_REDUX.siteDescription}`" />
        <h1>Home</h1>
      </div>
    )
  }
}

export default connect()(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';
import Header from '../Common/Header';

class Home extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | ${WP_REACT_REDUX.siteDescription}`;

    return (
      <div>
        <Head title={title} />
        <Header />
        <h1>Home</h1>
      </div>
    )
  }
}

export default connect()(Home);

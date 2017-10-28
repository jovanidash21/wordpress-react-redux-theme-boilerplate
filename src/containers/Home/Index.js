import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Home extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | ${WP_REACT_REDUX.siteDescription}`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <h2>Home</h2>
        </div>
      </div>
    )
  }
}

export default connect()(Home);

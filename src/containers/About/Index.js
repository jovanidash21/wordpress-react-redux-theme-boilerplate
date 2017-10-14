import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class About extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | About`;

    return (
      <div>
        <Head title={title} />
        <h1>About</h1>
      </div>
    )
  }
}

export default connect()(About);

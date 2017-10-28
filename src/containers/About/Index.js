import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class About extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | About`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <h2>About</h2>
        </div>
      </div>
    )
  }
}

export default connect()(About);

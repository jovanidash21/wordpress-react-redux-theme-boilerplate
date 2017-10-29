import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Blog extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | Blog`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <h2>Blog</h2>
        </div>
      </div>
    )
  }
}

export default connect()(Blog);

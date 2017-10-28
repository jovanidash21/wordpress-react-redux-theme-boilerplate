import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Contact extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | Contact`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <h2>Contact</h2>
        </div>
      </div>
    )
  }
}

export default connect()(Contact);

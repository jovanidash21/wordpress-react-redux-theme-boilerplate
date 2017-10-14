import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Contact extends Component {
  render() {
    const title = `${WP_REACT_REDUX.siteName} | Contact`;

    return (
      <div>
        <Head title={title} />
        <h1>Contact</h1>
      </div>
    )
  }
}

export default connect()(Contact);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class Contact extends Component {
  render() {
    return (
      <div>
        <Head title="Contact" />
        <h1>Contact</h1>
      </div>
    )
  }
}

export default connect()(Contact);

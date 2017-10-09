import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from '../../components/Head';

class About extends Component {
  render() {
    return (
      <div>
        <Head title="About" />
        <h1>About</h1>
      </div>
    )
  }
}

export default connect()(About);

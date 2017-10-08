import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    )
  }
}

export default connect()(Contact);

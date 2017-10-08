import React, { Component } from 'react';
import { connect } from 'react-redux';

class Work extends Component {
  render() {
    return (
      <div>
        <h1>Work</h1>
      </div>
    )
  }
}

export default connect()(Work);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Header from './Common/Header';

class Base extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

Base.propTypes={
  children: PropTypes.node
}

export default Base;
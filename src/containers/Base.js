import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Header from './Common/Header';

class Base extends Component {
  constructor(props) {
    super(props);
  }
  handleComponent(matchProps) {
    const { component: Components } = this.props;

    return (
      <div>
        <Header />
        <Components {...matchProps} />
      </div>
    )
  }
  render() {
    const { component, ...rest } = this.props;

    return (
      <Route {...rest} render={::this.handleComponent} />
    )
  }
}

Base.propTypes={
  component: PropTypes.func
}

export default Base;
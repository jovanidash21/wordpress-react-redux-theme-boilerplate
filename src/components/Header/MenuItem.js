import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink
} from 'reactstrap';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  handleLink(url) {
    url = url.replace(/^(?:\/\/|[^\/]+)*\//, "/");

    url.length > 1
      ? url = url.replace(/\/$/, "")
      : ''

    return url;
  }
  render() {
    const { menu } = this.props;

    return (
      <NavItem>
        <NavLink tag={RRNavLink} to={::this.handleLink(menu.url)}>
          {menu.title}
        </NavLink>
      </NavItem>
    )
  }
}

MenuItem.propTypes={
  menu: PropTypes.object.isRequired
}

export default MenuItem;

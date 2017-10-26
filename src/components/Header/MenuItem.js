import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  NavItem, 
  NavLink 
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class MenuItem extends Component {
  render() {
    const { menu } = this.props;
    menu.url = menu.url.replace(/^(?:\/\/|[^\/]+)*\//, "/");
    menu.url = menu.url.slice(0, -1);

    return (
      <NavItem>
        <NavLink to={menu.url} tag={RRNavLink}>
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
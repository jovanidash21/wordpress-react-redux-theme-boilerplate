import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  NavItem, 
  NavLink 
} from 'reactstrap';

class MenuItem extends Component {
  render() {
    const { menu } = this.props;

    return (
      <NavItem>
        <NavLink href={menu.url}>
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
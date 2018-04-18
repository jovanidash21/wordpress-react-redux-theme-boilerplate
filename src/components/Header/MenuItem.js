import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink
} from 'reactstrap';

const MenuItem = (props) => {
  return (
    <NavItem>
      <NavLink
        {
          ...(
            props.menu.type !== 'custom'
              ?
              {
                tag: RRNavLink,
                to: props.menu.path
              }
              :
              {
                href: props.menu.path
              }
          )
        }
        {
          ...(
            props.menu.target.length > 0
              ?
              {
                target: props.menu.target
              }
              : ''
          )
        }
      >
        {props.menu.title}
      </NavLink>
    </NavItem>
  )
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired
}

export default MenuItem;

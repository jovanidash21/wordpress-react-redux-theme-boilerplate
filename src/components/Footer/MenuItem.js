import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li>
      <Link to={props.menu.path}>
        {props.menu.title}
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired
}

export default MenuItem;

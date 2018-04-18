import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li>
      {
        props.menu.type !== 'custom'
          ?
          <Link
            to={props.menu.path}
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
          </Link>
          :
          <a
            href={props.menu.path}
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
          </a>
      }
    </li>
  )
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired
}

export default MenuItem;

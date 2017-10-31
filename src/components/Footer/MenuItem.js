import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <li>
        <Link to={::this.handleLink(menu.url)}>
          {menu.title} 
        </Link>
      </li>
    )
  }
}

MenuItem.propTypes={
  menu: PropTypes.object.isRequired
}

export default MenuItem;
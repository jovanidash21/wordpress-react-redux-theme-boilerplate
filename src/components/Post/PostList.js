import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class PostList extends Component {
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
    const { post } = this.props;

    return (
      <ListGroup>
        {
          post.map((data, i) =>
            <ListGroupItem key={i} to={::this.handleLink(data.link)} tag={Link}>
              {data.title.rendered}
            </ListGroupItem>
          )
        }
      </ListGroup>

    )
  }
}

PostList.propTypes = {
  post: PropTypes.array.isRequired
}

export default PostList;

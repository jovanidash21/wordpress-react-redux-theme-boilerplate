import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class WorkList extends Component {
  render() {
    const { post } = this.props;

    return (
      <ListGroup>
        {
          post.data.map((data, i) =>
            <ListGroupItem key={i}>
              {data.title.rendered}
            </ListGroupItem>
          )
        }
      </ListGroup>

    )
  }
}

WorkList.propTypes={
  post: PropTypes.object.isRequired
}

export default WorkList;

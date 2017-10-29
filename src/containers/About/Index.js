import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import { fetchPage } from '../../actions/page';
import Head from '../../components/Head';

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchPage('about'));
  }
  render() {
    const { page } = this.props;
    const title = `${WP_REACT_REDUX.siteName} | About`;

    return (
      <div>
        <Head title={title} />
        <div className="container">
          <Jumbotron>
            {
              page.data.length
                ?
                page.data.map((data, i) =>
                  <div key={i}>
                    <h2 className="display-3">
                      {data.title.rendered}
                    </h2>
                  </div>
                )
                : ''
            }
          </Jumbotron>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    page: state.page
  }
}

export default connect(
  mapStateToProps
)(About);

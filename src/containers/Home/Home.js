import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchPage } = this.props;

    fetchPage('home');
  }
  handleHeadData() {
    const title = `${WP_REACT_REDUX.siteName} | ${WP_REACT_REDUX.siteDescription}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { page } = this.props;

    return (
      <div>
        {::this.handleHeadData()}
        <div className="container">
          <Jumbotron>
            {
              'home' in page.singlePage &&
              page.singlePage.home.length > 0 &&
              page.singlePage.home.map((pageData, i) =>
                <div key={i}>
                  <h2 className="display-3">
                    {pageData.title.rendered}
                  </h2>
                  <hr className="my-2" />
                  {ReactHtmlParser(pageData.content.rendered)}
                </div>
              )
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
  mapStateToProps,
  mapDispatchToProps
)(Home);

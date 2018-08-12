import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import mapDispatchToProps from '../../actions';
import Head from '../../components/Head';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchPage } = this.props;

    fetchPage('contact');
  }
  handleHeadData(headTitle) {
    const title = `${headTitle} | ${WP_REACT_REDUX.siteName}`;

    return (
      <Head title={title} />
    )
  }
  render() {
    const { page } = this.props;

    return (
      <div>
        {::this.handleHeadData('Contact')}
        <div className="container">
          <Jumbotron>
            {
              'contact' in page.singlePage &&
              page.singlePage.contact.length > 0 &&
              page.singlePage.contact.map((pageData, i) =>
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
)(Contact);

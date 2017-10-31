import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMenu } from '../../actions/menu';
import MenuItem from '../../components/Footer/MenuItem';
require('../../styles/Footer.scss');

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchMenu('footer'));
  }
  render() {
    const { menu } = this.props;

    return (
      <footer className="bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {
                  menu.data.length
                    ?
                    menu.data.map((data, i) =>
                      data.menuLocation === 'footer'
                        ?
                        data.menuStructure.map((menuStructure, i) =>
                          <MenuItem
                            key={i}
                            menu={menuStructure}
                          />
                        )
                        : ''
                    )
                    : ''
                }
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>
                <Link to="/">
                  {WP_REACT_REDUX.siteName}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    menu: state.menu
  }
}

export default connect(
  mapStateToProps
)(Footer);
import React, { Component } from 'react';
import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false};
  }
  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">WP React Redux</NavbarBrand>
          <NavbarToggler onClick={::this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
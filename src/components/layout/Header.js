import React from "react";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { string } from 'prop-types';

const Header = ({ appName }) => (
  <header className="header">
    <MDBNavbar color="default-color" dark>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link className="white-text" to="/">{appName}</Link>
        </MDBNavbarBrand>
        <MDBNavbarNav className="flex-row" right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/shopping-cart">
              <MDBIcon icon="shopping-cart" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  </header>
);

Header.propTypes = {
  appName: string.isRequired
};

export default Header;
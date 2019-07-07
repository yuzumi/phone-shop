import React from "react";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from "mdbreact";
import CartCount from 'components/cart/CartCount';
import { string } from 'prop-types';

const Header = ({ appName }) => (
  <header className="header">
    <MDBNavbar color="default-color" dark>
      <MDBContainer fluid>
        <MDBNavbarBrand className="mr-auto">
          <Link className="white-text" to="/">{appName}</Link>
        </MDBNavbarBrand>
        <CartCount />
      </MDBContainer>
    </MDBNavbar>
  </header>
);

Header.propTypes = {
  appName: string.isRequired
};

export default Header;
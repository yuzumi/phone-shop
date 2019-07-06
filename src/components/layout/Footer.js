import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import { string } from 'prop-types';

const Footer = ({ appName }) => {
  return (
    <MDBFooter className="footer font-small" color="default-color">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <span>
            {appName} &copy; {new Date().getFullYear()}
          </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

Footer.propTypes = {
  appName: string.isRequired
};

export default Footer;
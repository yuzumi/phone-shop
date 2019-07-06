import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className="no-match py-5 text-center">
    <MDBContainer fluid>
      <h2>404</h2>
      <p>Page Not Found!</p>
      <Link to="/">Go to homepage</Link>
    </MDBContainer>
  </div>
);

export default NoMatch;
import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import PhoneGrid from 'components/phone/PhoneGrid';

const HomePage = () => (
  <section className="page home">
    <MDBRow>
      <MDBCol md="3"></MDBCol>
      <MDBCol md="9">
        <PhoneGrid />
      </MDBCol>
    </MDBRow>
  </section>
);

export default HomePage;
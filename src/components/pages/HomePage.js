import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import PhoneList from 'components/phone/PhoneList';

const HomePage = () => (
  <section className="page home">
    <MDBRow>
      <MDBCol md="3"></MDBCol>
      <MDBCol md="9">
        <PhoneList />
      </MDBCol>
    </MDBRow>
  </section>
);

export default HomePage;
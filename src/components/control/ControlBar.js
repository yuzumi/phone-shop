import React from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import ViewSwitch from 'components/control/ViewSwitch';

const ControlBar = () => (
  <MDBCard>
    <MDBCardBody>
      <div className="d-flex align-items-center justify-content-end">
        <ViewSwitch />
      </div>
    </MDBCardBody>
  </MDBCard>
);

export default ControlBar;
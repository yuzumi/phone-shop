import React from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import ViewSwitch from 'components/control/ViewSwitch';
import SortSwitch from 'components/control/SortSwitch';

const ControlBar = () => (
  <MDBCard>
    <MDBCardBody>
      <div className="d-flex align-items-center justify-content-between">
        <SortSwitch />
        <ViewSwitch />
      </div>
    </MDBCardBody>
  </MDBCard>
);

export default ControlBar;
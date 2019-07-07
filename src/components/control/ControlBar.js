import React from 'react';
import { connect } from 'react-redux';
import { actions, selectors, constants } from 're-ducks/modules/view';
import { MDBCard, MDBCardBody, MDBBtn, MDBIcon } from 'mdbreact';

const viewOptions = {
  [constants.GRID]: {
    view: constants.GRID,
    icon: 'th',
  },
  [constants.LIST]: {
    view: constants.LIST,
    icon: 'th-list',
  }
};

const ControlBar = ({ view, setView }) => (
  <MDBCard>
    <MDBCardBody>
      <div className="d-flex align-items-center justify-content-end">
        {Object.entries(viewOptions).map(([ key, value ]) => (
          <MDBBtn
            outline={value.view === view} 
            size="sm" 
            onClick={() => setView(value.view)} 
            key={key}
          >
            <MDBIcon icon={value.icon} size="lg" />
          </MDBBtn>
        ))}
      </div>
    </MDBCardBody>
  </MDBCard>
);

const mapStateToProps = state => ({
  view: selectors.selectView(state),
});

export default connect(
  mapStateToProps,
  { setView: actions.setView }
)(ControlBar);
import React from 'react';
import { connect } from 'react-redux';
import { actions, selectors, constants } from 're-ducks/modules/view';
import { MDBBtn, MDBIcon } from 'mdbreact';

const ViewSwitch = ({ isCurrentView, setView }) => (
  <div className="view-switch">
    {Object.entries(constants.VIEW_OPTIONS).map(([key, option]) => (
      <MDBBtn
        outline={isCurrentView(option.value)}
        size="sm"
        onClick={() => setView(option.value)}
        key={key}
      >
        <MDBIcon icon={option.icon} size="lg" />
      </MDBBtn>
    ))}
  </div>
);

const mapStateToProps = state => ({
  isCurrentView: selectors.isCurrentView(state),
});

export default connect(
  mapStateToProps,
  { setView: actions.setView }
)(ViewSwitch);
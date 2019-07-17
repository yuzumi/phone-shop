import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { constants, selectors, actions } from 're-ducks/modules/sorting';

const SortSwitch = ({ param, isAsc, setSortingParam, setSortingAsc }) => {
  const renderOption = ([key, { param, name }]) => (
    <option key={key} value={param}>{name}</option>
  );

  const handleParamChange = event => {
    setSortingParam(event.target.value);
  };

  const options = Object
    .entries(constants.OPTIONS)
    .map(renderOption);

  return (
    <form className="sort-switch">
      <div className="d-flex align-items-center">
        <select
          className="form-control form-control-sm"
          value={param}
          onChange={handleParamChange}
        >
          {options}
        </select>
        <MDBBtn
          className="text-center"
          onClick={setSortingAsc}
          size="sm"
        >
          <MDBIcon
            icon={isAsc ? 'chevron-down' : 'chevron-up'}
            size="lg"
          />
        </MDBBtn>
      </div>
    </form> 
  );
};

const mapStateToProps = state => ({
  ...selectors.selectSorting(state)
});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortSwitch);
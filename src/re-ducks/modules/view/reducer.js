import types from 're-ducks/modules/view/types';
import constants from 're-ducks/modules/view/constants';

const initialState = constants.VIEWS.GRID;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_VIEW:
      return payload.view;
    default:
      return state;
  }
};

export default reducer;
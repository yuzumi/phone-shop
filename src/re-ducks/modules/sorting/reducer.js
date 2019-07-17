import types from 're-ducks/modules/sorting/types';
import constants from 're-ducks/modules/sorting/constants';

const initialState = {
  param: constants.PARAMS.TITLE,
  isAsc: true,
};

export default function sortingReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_SORTING_PARAM:
      return {
        ...state,
        param: payload.param,
      };
    case types.SET_SORTING_ASC:
      return {
        ...state,
        isAsc: !state.isAsc,
      };
    default:
      return state;
  }
};
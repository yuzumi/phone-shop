import types from 're-ducks/modules/sorting/types';

const setSortingParam = param => ({
  type: types.SET_SORTING_PARAM,
  payload: {
    param
  }
});

const setSortingAsc = () => ({
  type: types.SET_SORTING_ASC,
});

export default {
  setSortingParam,
  setSortingAsc,
};
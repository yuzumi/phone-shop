import types from 're-ducks/modules/view/types';

const setView = view => ({
  type: types.SET_VIEW,
  payload: {
    view
  }
});

export default {
  setView,
};
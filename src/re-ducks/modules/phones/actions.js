import types from 're-ducks/modules/phones/types';

const fetchPhonesRequest = () => ({
  type: types.FETCH_PHONES_REQUEST
});

const fetchPhonesSuccess = phones => ({
  type: types.FETCH_PHONES_SUCCESS,
  payload: {
    phones
  }
});

const fetchPhonesFailure = error => ({
  type: types.FETCH_PHONES_FAILURE,
  payload: {
    error
  }
});

export default {
  fetchPhonesRequest,
  fetchPhonesSuccess,
  fetchPhonesFailure,
};
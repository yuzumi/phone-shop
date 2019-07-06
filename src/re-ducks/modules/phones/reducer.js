import types from 're-ducks/modules/phones/types';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PHONES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_PHONES_SUCCESS: 
      return {
        ...state,
        items: payload.phones,
        isLoading: false,
      };
    case types.FETCH_PHONES_FAILURE:
      return {
        ...state,
        items: [],
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
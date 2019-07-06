import types from 're-ducks/modules/cart/types';

const initialState = {
  items: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...payload.item }],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.itemId)
      };
    default:
      return state;
  }
};

export default reducer;
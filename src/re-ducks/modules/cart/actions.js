import types from 're-ducks/modules/cart/types';

const addToCart = item => ({
  type: types.ADD_TO_CART,
  payload: {
    item
  }
});

const removeFromCart = itemId => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    itemId
  }
});

export default {
  addToCart,
  removeFromCart,
};
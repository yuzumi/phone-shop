import { createSelector } from 'reselect';

const selectCart = state => (
  state &&
  state.cart &&
  state.cart
) || {};

const selectItems = createSelector(
  selectCart,
  cart => (
    cart && 
    cart.items &&
    cart.items
  ) || []
);

const selectTotal = createSelector(
  selectItems,
  items => items.reduce((total, item) => total + item.price, 0)
);

const selectItemsCount = createSelector(
  selectItems,
  items => items.length
);

const isInCart = state => {
  const cartItems = selectItems(state);

  return item => {
    return cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1;
  };
};

export default {
  isInCart,
  selectCart,
  selectItems,
  selectTotal,
  selectItemsCount,
};
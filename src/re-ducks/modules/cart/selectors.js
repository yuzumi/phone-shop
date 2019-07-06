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

export default {
  selectCart,
  selectItems,
  selectTotal,
};
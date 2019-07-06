import React from 'react';
import CartListItem from 'components/cart/CartListItem';

const CartList = ({ items, removeFromCart }) => {
  const renderCartItem = item => (
    <div className="pb-3" key={item.id}>
      <CartListItem 
        {...{
          item,
          removeFromCart: () => removeFromCart(item.id)
        }}
      />
    </div>
  );

  return (
    <div className="cart-list">
      {items.map(renderCartItem)}
    </div>
  );
};

export default CartList;

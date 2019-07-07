import React from 'react';
import CartListItem from 'components/cart/CartListItem';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const CartList = ({ items, removeFromCart }) => {
  const renderCartItem = item => (
    <CSSTransition 
      key={item.id}
      timeout={500}
      classNames="item"  
    >
      <div className="pb-3">
        <CartListItem
          {...{
            item,
            removeFromCart: () => removeFromCart(item.id)
          }}
        />
      </div>
    </CSSTransition>
  );

  return (
    <div className="cart-list">
      <TransitionGroup>
        {items.map(renderCartItem)}
      </TransitionGroup>
    </div>
  );
};

export default CartList;

import React from 'react';
import { number } from 'prop-types';

const CartTotal = ({ total }) => (
  <div className="cart-total">
    <p className="text-muted text-right">
      Total: <span className="text-primary">{total}$</span>
    </p>
  </div>
);

CartTotal.propTypes = {
  total: number.isRequired,
};

export default CartTotal;
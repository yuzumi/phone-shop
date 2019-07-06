import React from 'react';
import { connect } from 'react-redux';
import { selectors, actions } from 're-ducks/modules/cart';
import { MDBAlert } from 'mdbreact';
import CartList from 'components/cart/CartList';
import CartTotal from 'components/cart/CartTotal';

const CartPage = ({ items, total, removeFromCart }) => (
  <section className="page cart">
    {(items.length > 0) ? (
      <>
        <CartList 
          {...{
            items,
            removeFromCart
          }}
        />
        <CartTotal total={total} />
      </>
    ) : (
      <MDBAlert className="text-center" color="warning">
        Cart is empty
      </MDBAlert>
    )}
  </section>
);

const mapStateToProps = state => ({
  items: selectors.selectItems(state),
  total: selectors.selectTotal(state),
});

export default connect(
  mapStateToProps,
  { removeFromCart: actions.removeFromCart }
)(CartPage);
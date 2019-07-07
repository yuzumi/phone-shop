import React from 'react';
import { connect } from 'react-redux';
import { selectors as phonesSelectors } from 're-ducks/modules/phones';
import { selectors as cartSelectors } from 're-ducks/modules/cart';
import { actions } from 're-ducks/modules/cart';
import PhoneCard from 'components/phone/PhoneCard';

const ProductPage = ({ phone, isInCart, addToCart, removeFromCart }) => (
  <section className="page phone">
    {phone && (
      <PhoneCard 
        {...{
          phone,
          inCart: isInCart(phone),
          addToCart: () => addToCart(phone),
          removeFromCart: () => removeFromCart(phone.id),
        }}
      />
    )}
  </section>
);

const mapStateToProps = (state, props) => ({
  phone: phonesSelectors.selectPhone(state, props),
  isInCart: cartSelectors.isInCart(state),
})

export default connect(
  mapStateToProps,
  { 
    addToCart: actions.addToCart,
    removeFromCart: actions.removeFromCart
  }
)(ProductPage);
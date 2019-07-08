import React from 'react';
import { connect } from 'react-redux';
import { selectors as phonesSelectors } from 're-ducks/modules/phones';
import { selectors as cartSelectors } from 're-ducks/modules/cart';
import { actions } from 're-ducks/modules/cart';
import PhoneCard from 'components/phone/PhoneCard';
import { MDBAlert } from 'mdbreact';
import { Link } from 'react-router-dom';

const PhonePage = ({ phone, isInCart, addToCart, removeFromCart }) => (
  <section className="page phone">
    {phone ? (
      <PhoneCard
        {...{
          phone,
          inCart: isInCart(phone),
          addToCart: () => addToCart(phone),
          removeFromCart: () => removeFromCart(phone.id),
        }}
      />
    ) : (
        <div className="d-flex flex-column align-items-center">
          <MDBAlert className="text-center" color="light">
            Product not found
          </MDBAlert>
          <Link to="/">Go to homepage</Link>
        </div>
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
)(PhonePage);
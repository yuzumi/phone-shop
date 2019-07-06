import React from 'react';
import { connect } from 'react-redux';
import { selectors } from 're-ducks/modules/phones';
import { actions } from 're-ducks/modules/cart';
import PhoneCard from 'components/phone/PhoneCard';

const ProductPage = ({ phone, addToCart }) => (
  <section className="page phone">
    {phone && (
      <PhoneCard 
        {...{
          phone,
          addToCart: () => addToCart(phone)
        }}
      />
    )}
  </section>
);

const mapStateToProps = (state, props) => ({
  phone: selectors.selectPhone(state, props)
})

export default connect(
  mapStateToProps,
  { addToCart: actions.addToCart }
)(ProductPage);
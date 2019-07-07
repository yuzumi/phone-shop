import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";

import PhoneGridItem from 'components/phone/PhoneGridItem';

const PhoneGrid = ({ items, addToCart, removeFromCart }) => {
  const renderPhoneItem = phone => (
    <MDBCol className="pt-3" lg="4" md="6" sm="12" key={phone.id}>
      <PhoneGridItem
        {...{
          phone,
          addToCart: () => addToCart(phone),
          removeFromCart: () => removeFromCart(phone.id),
        }}
      />
    </MDBCol>
  )

  return (
    <div className="phone-grid">
      <MDBRow className="pb-3">
        {items.map(renderPhoneItem)}
      </MDBRow>
    </div>
  );
}

export default PhoneGrid;
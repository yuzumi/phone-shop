import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import PhoneListItem from 'components/phone/PhoneListItem';

const PhoneList = ({ items, addToCart, removeFromCart }) => {
  const renderPhoneItem = phone => (
    <MDBCol className="pt-3" sm="12" key={phone.id}>
      <PhoneListItem
        {...{
          phone,
          addToCart: () => addToCart(phone),
          removeFromCart: () => removeFromCart(phone.id),
        }}
      />
    </MDBCol>
  )

  return (
    <div className="phone-list">
      <MDBRow className="pb-3">
        {items.map(renderPhoneItem)}
      </MDBRow>
    </div>
  );
}
export default PhoneList;
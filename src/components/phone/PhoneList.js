import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { selectors } from 're-ducks/modules/phones';
import { actions } from 're-ducks/modules/cart';

import Spinner from 'components/shared/Spinner';
import PhoneListItem from 'components/phone/PhoneListItem';

const PhoneList = ({ items, isLoading, addToCart }) => {
  const renderPhoneItem = phone => (
    <MDBCol className="pt-3" lg="4" md="6" sm="12" key={phone.id}>
      <PhoneListItem 
        {...{
          phone,
          addToCart: () => addToCart(phone),
        }} 
      />
    </MDBCol>
  )

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
          <MDBRow className="pb-3">
            {items.map(renderPhoneItem)}
          </MDBRow>
        )}
    </>
  );
}

const mapStateToProps = state => ({
  ...selectors.selectPhones(state)
});

export default connect(
  mapStateToProps,
  { addToCart: actions.addToCart }
)(PhoneList);
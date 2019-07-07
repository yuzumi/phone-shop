import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { selectors } from 're-ducks/modules/phones';
import { actions } from 're-ducks/modules/cart';

import Spinner from 'components/shared/Spinner';
import PhoneGridItem from 'components/phone/PhoneGridItem';

const PhoneGrid = ({ items, isLoading, addToCart }) => {
  const renderPhoneItem = phone => (
    <MDBCol className="pt-3" lg="4" md="6" sm="12" key={phone.id}>
      <PhoneGridItem 
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
)(PhoneGrid);
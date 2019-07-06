import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Image from 'components/shared/Image';

const PhoneCard = ({ phone, addToCart }) => (
  <div className="phone-card">
    <MDBRow>
      <MDBCol lg="4" md="6" sm="12">
        <Image src={phone.image} alt={phone.title} />
      </MDBCol>
      <MDBCol lg="8" md="6" sm="12">
        <h2 className="h1-responsive">{phone.title}, {phone.company}</h2>
        <p className="text-muted mb-0">{phone.info}</p>
        <p className="text-muted pt-3 mb-0">
          Price: <span className="text-primary">{phone.price}$</span>
        </p>
        <p className="text-muted">
          Company: <span className="text-primary">{phone.company}</span>
        </p>
        <MDBBtn className="mx-0" size="sm" onClick={addToCart}>Add to cart</MDBBtn>
      </MDBCol>
    </MDBRow>
  </div>
);

export default PhoneCard;
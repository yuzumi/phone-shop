import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

const CartListItem = ({ item, removeFromCart }) => (
  <MDBCard>
    <MDBCardBody>
      <MDBRow>
        <MDBCol lg="2" md="4" sm="12">
          <MDBCardImage className="img-fluid" src={item.image} alt={item.title} waves />
        </MDBCol>
        <MDBCol lg="10" md="8" sm="12">
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText className="mb-0">
            Company: <span className="text-primary">{item.company}</span>
          </MDBCardText>
          <MDBCardText className="mb-0">
            {item.info}
          </MDBCardText>
          <div className="d-flex align-items-center justify-content-between pt-3">
            <MDBCardText className="mb-0">
              Price: <span className="text-primary">{item.price}$</span>
            </MDBCardText>
            <MDBBtn color="danger" size="sm" onClick={removeFromCart}>Remove from cart</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
);

export default CartListItem;
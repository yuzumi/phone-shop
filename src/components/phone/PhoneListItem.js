import React from "react";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const PhoneListItem = ({ phone, addToCart }) => {
  const to = `/phone/${phone.id}`;

  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="4" sm="12">
            <MDBCardImage
              className="img-fluid"
              src={phone.image}
              alt={phone.title}
              waves
            />
          </MDBCol>
          <MDBCol md="8" sm="12">
            <MDBCardText>
              <Link to={to}>{phone.title}</Link>
            </MDBCardText>
            <MDBCardText>
              {phone.info}
            </MDBCardText>
            <div className="d-flex align-items-center">
              <span className="font-weight-bold">
                <strong>{phone.price}$</strong>
              </span>
              <Link className="btn btn-primary btn-sm ml-auto" to={to}>
                <MDBIcon icon="info" />
              </Link>
              <MDBBtn size="sm" color="success" onClick={addToCart}>
                <MDBIcon icon="plus" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default PhoneListItem;

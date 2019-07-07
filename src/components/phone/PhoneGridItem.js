import React from "react";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBIcon } from 'mdbreact';

const PhoneGridItem = ({ phone, inCart, addToCart, removeFromCart }) => {
  const to = `/phone/${phone.id}`;

  return (
    <MDBCard>
      <MDBCardImage
        className="img-fluid"
        src={phone.image}
        alt={phone.title}
        waves
      />
      <MDBCardBody>
        <MDBCardText>
          <Link to={to}>{phone.title}</Link>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <div className="d-flex align-items-center">
          <span className="font-weight-bold">
            <strong>{phone.price}$</strong>
          </span>
          <Link className="btn btn-primary btn-sm ml-auto" to={to}>
            <MDBIcon icon="info" />
          </Link>
          {inCart ? (
            <MDBBtn size="sm" color="danger" onClick={removeFromCart}>
              <MDBIcon icon="minus" size="lg" />
            </MDBBtn>
          ) : (
              <MDBBtn size="sm" color="success" onClick={addToCart}>
                <MDBIcon icon="plus" size="lg" />
              </MDBBtn>
            )}
        </div>
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PhoneGridItem;

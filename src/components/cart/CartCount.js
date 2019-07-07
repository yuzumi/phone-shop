import React from 'react';
import { connect } from 'react-redux';
import { selectors } from 're-ducks/modules/cart';
import { Link } from 'react-router-dom';
import { MDBBadge, MDBIcon } from "mdbreact";

const CartCount = ({ count }) => (
  <Link className="text-white" to="/shopping-cart">
    <MDBIcon className="pr-2" icon="shopping-cart" size="lg" />
    <MDBBadge color="danger">{count}</MDBBadge>
  </Link>
);

const mapStateToProps = state => ({
  count: selectors.selectItemsCount(state),
});

export default connect(
  mapStateToProps,
)(CartCount);
import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Spinner from 'components/shared/Spinner';
import { connect } from 'react-redux';
import { selectors as phonesSelectors } from 're-ducks/modules/phones';
import { selectors as viewSelectors } from 're-ducks/modules/view';
import { selectors as cartSelectors } from 're-ducks/modules/cart';
import { actions } from 're-ducks/modules/cart';

import PhoneView from 'components/phone/PhoneView';
import ControlBar from 'components/control/ControlBar';

const HomePage = ({ isLoading, ...restProps }) => (
  <section className="page home">
    {isLoading ? (
      <Spinner />
    ) : (
        <>
          <MDBRow>
            <MDBCol>
              <ControlBar />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <PhoneView {...restProps} />
            </MDBCol>
          </MDBRow>
        </>
      )}
  </section>
);

const mapStateToProps = state => ({
  ...phonesSelectors.selectPhones(state),
  items: phonesSelectors.selectSortedPhones(state),
  view: viewSelectors.selectView(state),
  isInCart: cartSelectors.isInCart(state),
});

export default connect(
  mapStateToProps,
  {
    addToCart: actions.addToCart,
    removeFromCart: actions.removeFromCart,
  }
)(HomePage);
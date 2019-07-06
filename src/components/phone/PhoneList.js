import React, { Component } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { operations, selectors } from 're-ducks/modules/phones';

import Spinner from 'components/shared/Spinner';
import PhoneListItem from 'components/phone/PhoneListItem';

class PhoneList extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhoneItem = phone => (
    <MDBCol className="pt-3" lg="4" md="6" sm="12" key={phone.id}>
      <PhoneListItem phone={phone} />
    </MDBCol>
  )

  render() {
    const { items, isLoading } = this.props;

    return (
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <MDBRow className="pb-3">
            {items.map(this.renderPhoneItem)}
          </MDBRow>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...selectors.selectPhones(state)
});

export default connect(
  mapStateToProps,
  { fetchPhones: operations.fetchPhones }
)(PhoneList);
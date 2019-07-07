import React from 'react';
import { constants } from 're-ducks/modules/view';

import PhoneGrid from 'components/phone/PhoneGrid';
import PhoneList from 'components/phone/PhoneList';

const PhoneView = ({ view, items, addToCart, removeFromCart }) => {
  const chooseView = () => {
    switch (view) {
      case constants.GRID:
        return <PhoneGrid {...{items, addToCart, removeFromCart}} />;
      case constants.LIST:
        return <PhoneList {...{items, addToCart, removeFromCart}} />;
      default:
        return <PhoneGrid {...{items, addToCart, removeFromCart}} />;
    }
  };

  return chooseView();
};

export default PhoneView;
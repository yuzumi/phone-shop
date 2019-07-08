import React from 'react';
import { constants } from 're-ducks/modules/view';

import PhoneGrid from 'components/phone/PhoneGrid';
import PhoneList from 'components/phone/PhoneList';

const PhoneView = ({ view, ...restProps }) => {
  const chooseView = () => {
    switch (view) {
      case constants.VIEWS.GRID:
        return <PhoneGrid {...restProps} />;
      case constants.VIEWS.LIST:
        return <PhoneList {...restProps} />;
      default:
        return <PhoneGrid {...restProps} />;
    }
  };

  return chooseView();
};

export default PhoneView;
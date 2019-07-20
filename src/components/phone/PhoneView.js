import React from 'react';
import { constants } from 're-ducks/modules/view';

import PhoneGrid from 'components/phone/PhoneGrid';
import PhoneList from 'components/phone/PhoneList';

const views = new Map([
  [ constants.VIEWS.GRID, PhoneGrid ],
  [ constants.VIEWS.LIST, PhoneList ]
]);

const PhoneView = ({ view, ...restProps }) => {
  const ViewComponent = views.get(view) || PhoneGrid; 

  return <ViewComponent {...restProps} />;
};

export default PhoneView;
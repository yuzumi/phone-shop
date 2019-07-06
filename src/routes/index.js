import React, { lazy } from 'react';

const HomePage = lazy(() => import('components/pages/HomePage'));
const CartPage = lazy(() => import('components/pages/CartPage'));
const NoMatch = lazy(() => import('components/pages/NoMatch'));
const PhonePage = lazy(() => import('components/pages/PhonePage'));

const routes = [
  {
    path: '/',
    exact: true,
    render: props => <HomePage {...props} />
  }, {
    path: '/shopping-cart',
    render: props => <CartPage {...props} />
  }, {
    path: '/phone/:id',
    render: props => <PhonePage {...props} />
  }, {
    path: '*',
    render: props => <NoMatch {...props} />
  },
];

export default routes;
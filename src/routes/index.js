import React, { lazy } from 'react';

const HomePage = lazy(() => import('components/pages/HomePage'));
const CartPage = lazy(() => import('components/pages/CartPage'));
const NoMatch = lazy(() => import('components/pages/NoMatch'));
const ProductPage = lazy(() => import('components/pages/ProductPage'));

const routes = [
  {
    path: '/',
    exact: true,
    render: props => <HomePage {...props} />
  }, {
    path: '/cart',
    render: props => <CartPage {...props} />
  }, {
    path: '/product/:id',
    render: props => <ProductPage {...props} />
  }, {
    path: '*',
    render: props => <NoMatch {...props} />
  },
];

export default routes;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { operations } from 're-ducks/modules/phones';

import Spinner from 'components/shared/Spinner';
import Template from 'components/layout/Template';
import RouterOutlet from 'components/services/RouterOutlet';

import routes from 'routes';

const App = ({ fetchPhones }) => {
  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="app">
      <Template>
        <RouterOutlet {...{
          routes,
          fallback: <Spinner />
        }}
        />
      </Template>
    </div>
  );
};

export default connect(
  null,
  { fetchPhones: operations.fetchPhones }
)(App);

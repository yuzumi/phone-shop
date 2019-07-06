import React from 'react';

import Spinner from 'components/shared/Spinner';
import Template from 'components/layout/Template';
import RouterOutlet from 'components/services/RouterOutlet';

import routes from 'routes';

const App = () => (
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

export default App;

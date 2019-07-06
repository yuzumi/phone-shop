import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from 'components/App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'index.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

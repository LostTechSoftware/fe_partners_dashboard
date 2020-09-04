import React from 'react';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';

import Request from './pages/Requests';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Request} />
    </Switch>
  </BrowserRouter>
);

export default Router;

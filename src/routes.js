import React from 'react';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';

import Requests from './pages/Requests';
import FoodMenu from './pages/FoodMenu';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Requests} />
      <Route path='/menu' component={FoodMenu} />
    </Switch>
  </BrowserRouter>
);

export default Router;

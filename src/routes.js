import React from 'react';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';

import Login from './pages/Login';
import Requests from './pages/Requests';
import FoodMenu from './pages/FoodMenu';
import Money from './pages/Money';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/requests' component={Requests} />
      <Route path='/menu' component={FoodMenu} />
      <Route path='/money' component={Money} />
    </Switch>
  </BrowserRouter>
);

export default Router;

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import { isAuthenticated } from './services/auth'; 

import Login from './pages/Login';
import Requests from './pages/Requests';
import FoodMenu from './pages/FoodMenu';
import Money from './pages/Money';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      isAuthenticated() ?
        <Component {...props} />
      :
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Login } />
      
      <PrivateRoute path='/requests' component={ Requests } />
      <PrivateRoute path='/menu' component={ FoodMenu } />
      <PrivateRoute path='/money' component={ Money } />
    </Switch>
  </BrowserRouter>
);

export default Router;

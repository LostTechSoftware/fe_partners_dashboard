import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from "./pages/Login";
import Requests from "./pages/Requests";
import Menu from "./pages/FoodMenu";
import Money from "./pages/Money";
import Profile from "./pages/Settings/Profile";
import Access from "./pages/Settings/Access";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />

      <PrivateRoute path="/requests" component={Requests} />

      <PrivateRoute path="/settings/profile" component={Profile} />
      <PrivateRoute path="/settings/access" component={Access} />

      <PrivateRoute path="/menu" component={Menu} />

      <PrivateRoute path="/money" component={Money} />
    </Switch>
  </BrowserRouter>
);

export default Router;

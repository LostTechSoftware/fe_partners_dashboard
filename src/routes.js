import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from "./pages/Login";
import Menu from "./pages/FoodMenu";
import Money from "./pages/Money";
import Message from "./pages/Messages";
import Profile from "./pages/Settings/Profile";
import Access from "./pages/Settings/Access";
import Payments from "./pages/Settings/Payments";
import Partners from "./pages/Settings/Partners";
import Tasks from "./pages/Tasks";

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

      <PrivateRoute path="/messages" component={Message} />

      <PrivateRoute path="/settings/profile" component={Profile} />
      <PrivateRoute path="/settings/access" component={Access} />
      <PrivateRoute path="/settings/payments" component={Payments} />
      <PrivateRoute path="/settings/partners" component={Partners} />

      <PrivateRoute path="/requests" component={Tasks} />
      <PrivateRoute path="/menu" component={Menu} />

      <PrivateRoute path="/money" component={Money} />
    </Switch>
  </BrowserRouter>
);

export default Router;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Client";
import Menu from "./pages/FoodMenu";
import Money from "./pages/Money";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Settings/Profile";
import Access from "./pages/Settings/Access";
import Payments from "./pages/Settings/Payments";
import Partners from "./pages/Settings/Partners";
import Message from "./pages/Messages";
import Tasks from "./pages/Tasks";
import { getLevel } from "./services/getLevel";

export default function Router() {
  const [level, setLevel] = useState(2);

  useEffect(() => {
    async function getLevelResponse() {
      const levelResponse = await getLevel();

      setLevel(levelResponse);
    }
    getLevelResponse();
  }, []);

  const RootRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        level === 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const MasterRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        level <= 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const SubAcessRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        level <= 2 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />

        <RootRoutes path="/settings/profile" component={Profile} />
        <RootRoutes path="/settings/access" component={Access} />
        <RootRoutes path="/settings/payments" component={Payments} />
        <RootRoutes path="/settings/partners" component={Partners} />

        <SubAcessRoutes path="/messages" component={Message} />
        <SubAcessRoutes path="/requests" component={Tasks} />
        <SubAcessRoutes path="/menu" component={Menu} />

        <MasterRoutes path="/money" component={Money} />
      </Switch>
    </BrowserRouter>
  );
}

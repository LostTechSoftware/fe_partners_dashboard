import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Message from "./pages/Messages";
import Menu from "./pages/Gulp";
import Login from "./pages/Client";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Settings/Profile";
import Access from "./pages/Settings/Access";
import Payments from "./pages/Settings/Payments";
import Partners from "./pages/Settings/Partners";
import Tasks from "./pages/Tasks";
import Finance from "./pages/Finance";

import Localization from "./pages/Localization";
import Page404 from "./pages/404";
import Password from "./pages/Password";
import AuthContext from "./contexts/acessLevel";
import Tester from "./pages/Tester";

export default function Router() {
  const { level } = useContext(AuthContext);

  const RootRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        level == 0 ? (
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
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/password" component={Password} />

        <Route path="/tester/accept/:email" component={Tester} />

        <RootRoutes path="/settings/profile" component={Profile} />
        <RootRoutes path="/settings/access" component={Access} />
        <RootRoutes path="/settings/payments" component={Payments} />
        <RootRoutes path="/settings/partners" component={Partners} />

        <SubAcessRoutes path="/messages" component={Message} />
        <SubAcessRoutes path="/requests" component={Tasks} />
        <SubAcessRoutes path="/menu" component={Menu} />
        <SubAcessRoutes path="/maps" component={Localization} />

        <MasterRoutes path="/finance" component={Finance} />

        <Route exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

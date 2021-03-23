import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "@pages/login/Login";
import Users from "@pages/private/users/Users";
import Consultations from "@pages/private/consultations/Consultations";
import Admin from "./Admin";

const RouterConfig: React.FC = () => {
  const [loggedIn, _] = React.useState(false);

  return (
    <>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/user" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/user" component={Users} />
      <Route path="/consultation" component={Consultations} />
      <Route path="/admin" component={Admin} />
    </>
  );
};

export default RouterConfig;

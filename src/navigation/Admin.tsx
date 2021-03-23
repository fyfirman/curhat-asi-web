import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes as routes } from "@navigation/routes";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";

const routeName = "/admin";

const switchRoutes = (
  <Switch>
    {routes.map((route, key) => {
      return <Route exact path={routeName + route.path} component={route.component} key={key} />;
    })}
    <Redirect from={routeName} to={`${routeName}/users`} />
  </Switch>
);

const Admin = () => {
  return (
    <>
      <Navbar />
      <Sidebar routes={routes} prefixPath={routeName} />
      <main>{switchRoutes}</main>
    </>
  );
};

export default Admin;

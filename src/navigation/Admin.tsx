import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core";
import { privateRoutes as routes } from "@navigation/routes";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import UserDetail from "@pages/private/userDetail/UserDetail";

const routeName = "/admin";
const sideBarWidth = 250;

const switchRoutes = (
  <Switch>
    {routes.map((route, key) => {
      return <Route exact path={routeName + route.path} component={route.component} key={key} />;
    })}
    <Route path={`${routeName}/user/:id`} component={UserDetail} />
    <Redirect from={routeName} to={`${routeName}/user`} />
  </Switch>
);

const useStyle = makeStyles((theme: Theme) => ({
  content: {
    marginLeft: sideBarWidth,
    marginTop: 64,
    ...theme.mixins.toolbar
  }
}));

const Admin = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Sidebar routes={routes} prefixPath={routeName} width={sideBarWidth} />
      <main className={classes.content}>{switchRoutes}</main>
    </>
  );
};

export default Admin;

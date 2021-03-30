import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core';
import { privateRoutes as routes } from '@router/routes';
import Sidebar from '@components/Sidebar';
import UserDetail from '@pages/admin/user/userDetail/UserDetail';
import ConsultationRoom from '@pages/admin/consultation/constultationRoom/ConsultationRoom';
import AddUser from '@pages/admin/user/addUser/AddUser';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';

const routeName = '/admin';
const sideBarWidth = 250;

const useStyle = makeStyles((theme: Theme) => ({
  content: {
    height: '100vh',
    marginLeft: sideBarWidth,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
    ...theme.mixins.toolbar,
  },
}));

const Admin = () => {
  const classes = useStyle();
  const session = useSelector((state: RootState) => state.session);

  return (
    <Route>
      {session.isLoggedIn ? (
        <>
          <Sidebar
            routes={routes}
            prefixPath={routeName}
            width={sideBarWidth}
          />
          <main className={classes.content}>
            <Switch>
              {routes.map((route, key) => (
                <Route
                  exact
                  path={routeName + route.path}
                  component={route.component}
                  key={key}
                />
              ))}
              <Route path={`${routeName}/user/add`} component={AddUser} />
              <Route path={`${routeName}/user/:id`} component={UserDetail} />
              <Route
                path={`${routeName}/consultation/:id`}
                component={ConsultationRoom}
              />
              <Redirect from={routeName} to={`${routeName}/user`} />
            </Switch>
          </main>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

export default Admin;

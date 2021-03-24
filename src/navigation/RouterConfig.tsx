import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '@pages/login/Login';
import Admin from './Admin';

const RouterConfig: React.FC = () => {
  const [loggedIn, _] = React.useState(false);

  return (
    <>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/admin" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </>
  );
};

export default RouterConfig;

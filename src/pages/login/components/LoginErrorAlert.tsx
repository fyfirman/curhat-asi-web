import React from 'react';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import Alert, { AlertProps } from '@material-ui/lab/Alert';

const LoginErrorAlert = (props: AlertProps) => {
  const loginError = useSelector((state: RootState) => state.loginError);

  return (
    <Alert severity="error" {...props}>{loginError.message}</Alert>
  );
};

export default LoginErrorAlert;

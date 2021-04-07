/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import {
  Button, makeStyles, Theme,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { requestLogin } from '@redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import UserGroup from '@constants/UserGroupEnum';
import LoginErrorAlert from './LoginErrorAlert';
import Field from './CustomField';
import UserGroupField from './UserGroupField';

// TODO: Fix validation schema
const validationSchema = yup.object({
  username: yup
    .string()
    .required('Email is required'),
  password: yup
    .string()
    .max(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const useStyles = makeStyles((theme: Theme) => ({
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

interface ILoginInput {
  username: string;
  password: string;
  userGroupId: string;
}

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const loginError = useSelector((state: RootState) => state.loginError);

  const initialValues = {
    username: '',
    password: '',
    userGroupId: UserGroup.Administrator,
  };

  const onSubmit = ({ userGroupId, username, password } : ILoginInput) => {
    dispatch(requestLogin(userGroupId, username, password));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <UserGroupField
          name="userGroupId"
          label="Jabatan"
        />
        <Field
          component={TextField}
          name="username"
          label="Nomor Handphone"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          label="PIN (6 Digit)"
          type="password"
        />
        {/* {loginError.message !== '' && <LoginErrorAlert className={classes.loginAlert} />} */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disableElevation
        >
          Login
        </Button>
      </Form>

    </Formik>

  );
};

export default LoginForm;

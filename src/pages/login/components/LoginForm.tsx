import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button, makeStyles, TextField, Theme,
} from '@material-ui/core';
import { login } from '@redux/actions/userActions';
import { useDispatch } from 'react-redux';

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
  field: {
    marginBottom: theme.spacing(3),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ username, password }) => {
      dispatch(login(username, password));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="Nomor Handphone"
        className={classes.field}
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        fullWidth
        autoFocus
        required
      />
      <TextField
        id="password"
        label="PIN (6 Digit)"
        type="password"
        className={classes.field}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
        required
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        fullWidth
        disableElevation
      >
        Login
      </Button>
    </form>

  );
};

export default LoginForm;
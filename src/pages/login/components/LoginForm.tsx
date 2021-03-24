import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button, makeStyles, TextField, Theme,
} from '@material-ui/core';

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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // TODO: Handle login submit
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
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

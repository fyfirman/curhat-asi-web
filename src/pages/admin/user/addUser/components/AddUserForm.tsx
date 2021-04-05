/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Button, makeStyles, Theme } from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Field from './CustomField';
import LocationFields from './LocationFields';

const useStyles = makeStyles((theme: Theme) => ({
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

interface AddUserFormValue {
  username: string;
  password: string;
  name: string;
  pob: string;
  dob: Date;
  provinceId: string | null;
  districtId: string | null;
  subDistrictId: string | null;
  villageId: string | null;

}

const _validationSchema = yup.object({
  username: yup
    .string()
    .required('Email is required'),
  password: yup
    .string()
    .max(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  name: yup
    .string()
    .required('Name is required'),
  pob: yup
    .string()
    .required('Name is required'),
  dob: yup
    .date()
    .required('Name is required'),
  provinceId: yup
    .string()
    .required('Name is required'),
  districtId: yup
    .string()
    .required('Name is required'),
  subDistrictId: yup
    .string()
    .required('Name is required'),
  villageId: yup
    .string()
    .required('Name is required'),
});

const AddUserForm = () => {
  // eslint-disable-next-line no-underscore-dangle
  const _classes = useStyles();

  const initialValues : AddUserFormValue = {
    username: '',
    password: '',
    name: '',
    pob: '',
    dob: new Date(),
    districtId: '',
    provinceId: '',
    subDistrictId: '',
    villageId: '',
  };

  const onSubmit = (values: AddUserFormValue) => {
    console.log(values);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            component={TextField}
            name="username"
            label="Nomor Handphone"
            autoFocus
          />
          <Field
            component={TextField}
            name="password"
            label="PIN Sementara"
          />
          <Field
            component={TextField}
            name="name"
            label="Nama"
          />
          <Field
            component={TextField}
            name="pob"
            label="Tempat Lahir"
          />
          <Field
            component={KeyboardDatePicker}
            label="Tanggal Lahir"
            name="dob"
            disableToolbar
            variant="inline"
          />
          <LocationFields />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            disableElevation
          >
            Daftar
          </Button>
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default AddUserForm;

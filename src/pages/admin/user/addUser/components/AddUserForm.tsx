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
  userGroup?: IUserGroup;
  phoneNumber: string;
  pin: string;
  name: string;
  pob: string;
  dob: Date;
  province?: IProvince;
  district?: IDistrict;
  subDistrict?: ISubDistrict;
  village?: IVillage;

}

const validationSchema = yup.object({
  userGroup: yup.object().required(),
  phoneNumber: yup
    .string()
    .required('Nomor Handphone harus diisi'),
  pin: yup
    .string()
    .matches(/^[0-9]+$/, 'PIN harus angka')
    .min(6, 'PIN harus 6 digit')
    .max(6, 'PIN harus 6 digit')
    .required('PIN harus diisi'),
  name: yup
    .string()
    .required('Nama harus diisi'),
  pob: yup
    .string()
    .required('Tempat lahir harus diisi'),
  dob: yup
    .date()
    .required('Tanggal lahir harus diisi'),
  province: yup.object().required(),
  district: yup.object().required(),
  subDistrict: yup.object().required(),
  village: yup.object().required(),
});

const AddUserForm = () => {
  // eslint-disable-next-line no-underscore-dangle
  const _classes = useStyles();

  const initialValues : AddUserFormValue = {
    phoneNumber: '',
    pin: '',
    name: '',
    pob: '',
    dob: new Date(1970, 0, 1),
  };

  const onSubmit = (values: AddUserFormValue) => {
    console.log(values);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            component={TextField}
            name="phoneNumber"
            label="Nomor Handphone"
            autoFocus
          />
          <Field
            component={TextField}
            name="pin"
            type="number"
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
            variant="inline"
            format="dd MMM yyyy"
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

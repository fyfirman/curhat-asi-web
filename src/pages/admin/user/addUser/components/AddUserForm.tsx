import React from 'react';
import {
  Button, InputLabel, makeStyles, MenuItem, Theme,
} from '@material-ui/core'; import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    marginBottom: theme.spacing(3),
  },
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
  provinceId: number;
  districtId: string;
  subDistrictId: string;
  villageId: string;

}

// eslint-disable-next-line no-underscore-dangle
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
  const classes = useStyles();

  const initialValues : AddUserFormValue = {
    username: '',
    password: '',
    name: '',
    pob: '',
    dob: new Date(),
    provinceId: 0,
    districtId: '',
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
            className={classes.field}
            label="Nomor Handphone"
            fullWidth
            autoFocus
            required
          />
          <Field
            component={TextField}
            className={classes.field}
            name="password"
            label="PIN Sementara"
            fullWidth
            required
          />
          <Field
            component={TextField}
            className={classes.field}
            name="name"
            label="Nama"
            fullWidth
            required
          />
          <Field
            component={TextField}
            className={classes.field}
            name="pob"
            label="Tempat Lahir"
            fullWidth
            required
          />
          <Field
            component={KeyboardDatePicker}
            className={classes.field}
            label="Tanggal Lahir"
            name="dob"
            fullWidth
            required
          />
          <InputLabel htmlFor="province-id">Provinsi</InputLabel>
          <Field
            className={classes.field}
            component={Select}
            name="provinceId"
            inputProps={{
              id: 'province-id',
            }}
            fullWidth
            required
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <InputLabel htmlFor="district-id">Kota/Kabupaten</InputLabel>
          <Field
            className={classes.field}
            component={Select}
            name="districtId"
            inputProps={{
              id: 'district-id',
            }}
            fullWidth
            required
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <InputLabel htmlFor="sub-district-id">Kecamatan</InputLabel>
          <Field
            className={classes.field}
            component={Select}
            name="subDistrictId"
            inputProps={{
              id: 'sub-district-id',
            }}
            fullWidth
            required
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <InputLabel htmlFor="village-id">Kelurahan/Desa</InputLabel>
          <Field
            className={classes.field}
            component={Select}
            name="villageId"
            inputProps={{
              id: 'village-id',
            }}
            fullWidth
            required
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
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

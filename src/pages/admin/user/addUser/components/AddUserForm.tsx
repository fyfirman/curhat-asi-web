import React from 'react';
import {
  Button, makeStyles, TextField, Theme,
} from '@material-ui/core'; import * as yup from 'yup';
import { useFormik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Select from './SelectWithHelper';

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    marginBottom: theme.spacing(3),
  },
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

const validationSchema = yup.object({
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
    .string()
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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      name: '',
      pob: '',
      dob: '',
      provinceId: '',
      districtId: '',
      subDistrictId: '',
      villageId: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
        label="PIN Sementara"
        type="password"
        className={classes.field}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
        required
      />
      <TextField
        id="name"
        name="name"
        label="Nama"
        className={classes.field}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
        autoFocus
        required
      />
      <TextField
        id="pob"
        name="pob"
        label="Tempat Lahir"
        className={classes.field}
        value={formik.values.pob}
        onChange={formik.handleChange}
        error={formik.touched.pob && Boolean(formik.errors.pob)}
        helperText={formik.touched.pob && formik.errors.pob}
        fullWidth
        autoFocus
        required
      />
      <TextField
        id="dob"
        name="dob"
        label="Tanggal Lahir"
        className={classes.field}
        value={formik.values.dob}
        onChange={formik.handleChange}
        error={formik.touched.dob && Boolean(formik.errors.dob)}
        helperText={formik.touched.dob && formik.errors.dob}
        fullWidth
        autoFocus
        required
      />
      <Select
        id="provinceId"
        name="provinceId"
        label="Provinsi"
        className={classes.field}
        value={formik.values.provinceId}
        onChange={formik.handleChange}
        error={formik.touched.provinceId && Boolean(formik.errors.provinceId)}
        helperText={formik.touched.provinceId && formik.errors.provinceId}
        fullWidth
        autoFocus
        required
      />
      <Select
        id="districtId"
        name="districtId"
        label="Kota/Kabupaten"
        className={classes.field}
        value={formik.values.districtId}
        onChange={formik.handleChange}
        error={formik.touched.districtId && Boolean(formik.errors.districtId)}
        helperText={formik.touched.districtId && formik.errors.districtId}
        fullWidth
        autoFocus
        required
      />
      <Select
        id="subDistrictId"
        name="subDistrictId"
        label="Kecamatan"
        className={classes.field}
        value={formik.values.subDistrictId}
        onChange={formik.handleChange}
        error={formik.touched.subDistrictId && Boolean(formik.errors.subDistrictId)}
        helperText={formik.touched.subDistrictId && formik.errors.subDistrictId}
        fullWidth
        autoFocus
        required
      />
      <Select
        id="villageId"
        name="villageId"
        label="Kelurahan/Desa"
        className={classes.field}
        value={formik.values.villageId}
        onChange={formik.handleChange}
        error={formik.touched.villageId && Boolean(formik.errors.villageId)}
        helperText={formik.touched.villageId && formik.errors.villageId}
        fullWidth
        autoFocus
        required
      />
      <Alert className={classes.loginAlert} />
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

export default AddUserForm;

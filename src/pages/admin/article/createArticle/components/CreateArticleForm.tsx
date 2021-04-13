import {
  Button, makeStyles, MenuItem, Theme,
} from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { requestAddUser } from '@redux/actions/addUserActions';
import { IUserRequest } from '@services/UserServices';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import Field from './CustomField';

const useStyles = makeStyles((theme: Theme) => ({
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

interface AddUserFormValue {
  userGroupId?: IUserGroup['id'];
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
  userGroupId: yup.string().required(),
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
  province: yup.object().required('Provinsi harus diisi'),
  district: yup.object().required('Kota/kabupaten harus diisi'),
  subDistrict: yup.object().required('Kecamatan harus diisi'),
  village: yup.object().required('Kelurahan/desa harus diisi'),
});

const userGroupMenu : { label: string, value: string }[] = [
  {
    label: 'ASI',
    value: 'asi',
  },
  {
    label: 'Menyusui',
    value: 'menyusui',
  },
];

const AddUserForm = () => {
  // eslint-disable-next-line no-underscore-dangle
  const _classes = useStyles();

  const dispatch = useDispatch();

  const handleEditorChange = (content: any) => {
    console.log('Content was updated:', content);
  };

  const initialValues : AddUserFormValue = {
    phoneNumber: '',
    pin: '',
    name: '',
    pob: '',
    dob: new Date(1970, 0, 1),
  };

  const onSubmit = async (values: AddUserFormValue) => {
    const data : IUserRequest = {
      userGroupId: values.userGroupId || '',
      name: values.name,
      phoneNumber: values.phoneNumber,
      pin: values.pin,
      pob: values.pob,
      dob: format(values.dob, 'yyyy-MM-dd'),
      villageId: values.village?.id || '',
    };

    dispatch(requestAddUser(data));
  };

  const renderUserGroupMenu = () => userGroupMenu.map((menu, index) => (
    <MenuItem key={index} value={menu.value}>{menu.label}</MenuItem>));

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
            name="title"
            label="Judul"
            autoFocus
          />
          <Field
            component={Select}
            name="category"
            label="Kategori"
            autoFocus
          >
            {renderUserGroupMenu()}
          </Field>
          <Editor
            apiKey="wih2rf5zdv0xfg2k76jg6xin5dzi1xafmly22xp6btipsjkg"
            initialValue="<p>Tulis konten anda disini</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | media image link | bullist numlist outdent indent | removeformat searchreplace | preview help ',
            }}
            onEditorChange={handleEditorChange}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            disableElevation
          >
            Buat artikel
          </Button>
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default AddUserForm;

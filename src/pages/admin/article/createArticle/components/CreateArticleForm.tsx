import {
  Button, makeStyles, Theme,
} from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux';
import RichEditor from '@components/RichEditor';
import { SimpleFileUpload, TextField } from 'formik-material-ui';
import Field from '@components/CustomField';
import { IArticleRequest } from '@services/ArticleServices';
import UserGroup from '@constants/UserGroupEnum';
import { useEffect, useState } from 'react';
import { requestArticleCategories } from '@redux/actions/articleCategoriesActions';
import TagsField from './TagsField';
import CategoryField from '../../../../../components/CategoryField';
import AccessByField from './AccessByField';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

interface ArticleFormValues {
  title: string;
  articleCategoryId?: IArticleCategory['id'];
  scopes: { [key: string] : boolean };
  content: string;
}

const validationSchema = yup.object({
  title: yup.string().required(),
});

const AddUserForm = () => {
  const classes = useStyles();

  const [content, setContent] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleCategories());
  }, []);

  const initialValues : ArticleFormValues = {
    title: '',
    articleCategoryId: undefined,
    scopes: {
      [UserGroup.Cadre]: false,
      [UserGroup.Midwife]: false,
      [UserGroup.Conselor]: false,
      [UserGroup.DoctorGeneral]: false,
      [UserGroup.DoctorSpecialist]: false,
      [UserGroup.Mommies]: false,
    },
    content: '',
  };

  const onSubmit = async (values: ArticleFormValues) => {
    const data : IArticleRequest = {
      title: values.title,
      content,
      articleCategoryId: values.articleCategoryId,
      scopes: Object.keys(values.scopes)
        .filter((key) => values.scopes[key])
        .map((key) => `${key}`),
    };

    console.log(data);
    // dispatch(requestAddUser(data));
  };

  /**
   * DEBUGGING
   */
  // const handleChange = (values: any) => {
  //   console.log(values);
  //   console.log(content);
  // };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validate={handleChange}
      >
        <Form className={classes.form}>
          <Field
            component={TextField}
            name="title"
            label="Judul"
            autoFocus
          />
          <CategoryField name="articleCategoryId" />
          <TagsField />
          <AccessByField />
          <RichEditor
            initialValue="<p>Tulis konten anda disini</p>"
            onEditorChange={(value) => setContent(value)}
          />
          <Field
            component={SimpleFileUpload}
            name="file"
            label="Upload gambar"
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

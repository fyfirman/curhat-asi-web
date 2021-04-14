import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import Field from '@pages/login/components/CustomField';
import { Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';

interface AddCategoryDialogProps {
  open: boolean;
  handleClose: () => void;
}

interface AddCategoryFormValue {
  parrentCategory: string;
  category: string;
}

const AddCategoryDialog = ({ open, handleClose }: AddCategoryDialogProps) => {
  const initialValues : AddCategoryFormValue = {
    parrentCategory: '',
    category: '',
  };

  const onSubmit = (values: AddCategoryFormValue) => {
    console.log(values);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Tambah Kategori</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogContent>
            <Field
              component={TextField}
              name="category"
              label="Kategori"
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Batal
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Tambahkan
            </Button>
          </DialogActions>
        </Form>
      </Formik>

    </Dialog>
  );
};

export default AddCategoryDialog;

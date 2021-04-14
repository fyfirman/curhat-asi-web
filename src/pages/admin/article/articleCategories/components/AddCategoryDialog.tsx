import {
  Dialog, DialogTitle,
} from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';

interface AddCategoryDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AddCategoryDialog = ({ open, handleClose }: AddCategoryDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Tambah Kategori</DialogTitle>
      <AddCategoryForm handleClose={handleClose} />
    </Dialog>
  );
};

export default AddCategoryDialog;

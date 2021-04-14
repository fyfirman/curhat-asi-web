import PromptDialog from '@components/PromptDialog';

interface DeletePromptDialogProps {
  open: boolean;
  handleClose: () => void;
}
const DeletePromptDialog = ({ open, handleClose }: DeletePromptDialogProps) => {
  return (
    <PromptDialog
      open={open}
      handleClose={handleClose}
      title="Anda yakin untuk menghapus artikel?"
      content="Artikel yang sudah dihapus tidak bisa dikembalikan,"
    />
  );
};

export default DeletePromptDialog;

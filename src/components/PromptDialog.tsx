import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';

interface PromptDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  content?: string;
  yesLabel?: string;
  noLabel?: string;
}

const PromptDialog = (props: PromptDialogProps) => {
  const {
    open, handleClose, title, content, yesLabel = 'Yakin', noLabel = 'Batalkan',
  } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {noLabel}
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          {yesLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PromptDialog;

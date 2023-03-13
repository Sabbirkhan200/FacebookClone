import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { LiveTv } from '@mui/icons-material';

export default function LiveVideo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="" onClick={handleClickOpen} startIcon={<LiveTv />}>
      Live
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
     
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure Go to Live?"}
        </DialogTitle>
    
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
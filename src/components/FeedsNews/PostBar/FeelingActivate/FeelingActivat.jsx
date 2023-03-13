import React from 'react'
;
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import BasicTabs from './Tabs';
const FeelingActivat = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
        <Button variant="" onClick={handleClickOpen} >
    Feeling/Activaty
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
     
      >
   
    
        <DialogActions>
     
         <BasicTabs/>
       
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default FeelingActivat

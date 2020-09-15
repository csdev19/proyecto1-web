import React from 'react';
import Button from '@material-ui/core/Button';

import SimpleDialog from './SimpleDialog';

function ComponentePrueba() {

  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // onClose(selectedValue);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Hola Mundo!
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open}  />
    </div>
  );
}

export default ComponentePrueba;

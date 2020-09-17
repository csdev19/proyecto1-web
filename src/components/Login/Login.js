import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login(props) {
  const classes = useStyles();
//   const classes = useStyles();

  // const { onClose, selectedValue, open } = props;
  const { onClose, open } = props;

  const handleClose = () => {
    onClose({ hola: '12'});
  };
  const handleLogin = () => {
    // setOpenLogin(true);
  };

  const handle = () => {

  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

      <DialogTitle id="simple-dialog-title">
        Iniciar Sesion
      </DialogTitle>

      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="filled-basic" label="Correo electronico" variant="filled" />
        <TextField id="filled-basic" label="Contraseña" variant="filled" />
      </form>

        <Button variant="contained" color="secondary" onClick={handleLogin}>
          Iniciar Sesion
        </Button>

        <span>o</span>
        
        <Button variant="contained" color="secondary" onClick={handle}>
          Google
        </Button>

        <Button variant="contained" color="secondary" onClick={handle}>
          Facebook
        </Button>

        <Button variant="contained" color="secondary" onClick={handle}>
          Apple
        </Button>

    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default Login;
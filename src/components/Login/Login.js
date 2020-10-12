import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

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
  const { onClose, onAction, open } = props;

  const [loginForm, setLoginForm] = useState({
    user: '',
    password: ''
  })


  const handleClose = () => {
    onClose({ hola: '12'});
  };
  const handleLogin = () => {
    // setOpenLogin(true);
    console.log('hola', loginForm)


    // onAction({hey: "you"})
  };

  const handle = () => {

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange -> { id, value }", { name, value })
    setLoginForm({ ...loginForm, [name] : value });
    // this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>

      <DialogTitle id="simple-dialog-title">
        Iniciar Sesion
      </DialogTitle>

      <form className={classes.root} noValidate autoComplete="off">
        <Input
          inputProps={ { 'aria-label': 'usuario' } }
          value={ loginForm.user }
          onChange={ handleChange }
          id="user"
          name="user"
          placeholder="Usuario..."
        />
        <Input
          inputProps={ { 'aria-label': 'contraseña' } }
          value={ loginForm.password }
          onChange={ handleChange }
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña..."
        />
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
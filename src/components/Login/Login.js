import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Directions } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
    },
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'
  },
  'login-title' : {
    color : '#2E598C',
    textAlign: 'center',
    fontWeight : 'bold'
  },
  'login-content' : {
    minWidth: "400px"
  },
  loginButtonContainer : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    '& > *' : {
      marginBottom : '10px',
    },
    '& > Button' : {
      borderRadius : '5px',
      padding : '10px 15px',
      width: '300px',
      fontWeight : '500',
      boxShadow : 'rgba(0,0,0,0.2) 1px 1px 5px 0',
    },
  },
  blueButton : {
    backgroundColor : '#2E598C',
    color : 'white',
    '&:hover' : {
      backgroundColor : '#2E598C',
    }
  },
  whiteButton : {
    backgroundColor : 'white',
    color : '#686868',
    '&:hover' : {
      backgroundColor : '#EBE9E9',
    }
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
    <React.Fragment>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="xl" classes={{ paper: classes["login-content"]}}>
        <DialogTitle id="simple-dialog-title" className={classes["login-title"]}>
          Iniciar Sesión
        </DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">

            <TextField id="filled-basic" label="Correo electronico" variant="filled" />
            <TextField id="filled-basic" label="Contraseña" variant="filled" />
          </form>

          <div className={classes.loginButtonContainer}>
            <Button variant="contained" color="secondary" onClick={handleLogin} className={classes.blueButton}>
            Iniciar Sesión
            </Button>

            <span>ó</span>

            <Button variant="contained" color="secondary" onClick={handle} className={classes.whiteButton}>
            Iniciar Sesión con Google
            </Button>

            <Button variant="contained" color="secondary" onClick={handle} className={classes.whiteButton}>
            Iniciar Sesión con Facebook
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default Login;
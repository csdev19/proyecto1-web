import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles} from '@material-ui/core/styles';
import Login from './../Login/Login';
import Register from './../Register/Register';
const useStyles = makeStyles((theme) => ({

  buttonContainer : {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    '& > Button' : {
      borderRadius : '5px',
      padding : '10px 15px',
      width: '300px',
      fontWeight : '500',
      boxShadow : 'rgba(0,0,0,0.2) 1px 1px 5px 0',
    },
    '& > Button:first-child':{
      marginBottom : '10px'
    }
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

function GestorIngreso(props) {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleRegister = () => {
    setOpenRegister(true);
  };

  const handleLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseRegister = (value) => {
    console.log("handleClose -> value", value)
    setOpenRegister(false);
    // setOpen(false);

    // setSelectedValue(value);
  };

  const handleCloseLogin = (value) => {
    console.log("handleClose -> value", value)
    setOpenLogin(false);
    // setSelectedValue(value);
  };
  

  return (
    <div class="main-container">
      <div class="part1" style={{ backgroundImage:`url(${process.env.PUBLIC_URL + '/images/portada_login2.jpg'})` }}>
      </div>
      <div class="part2">
        <div class="part2-content">
          <h1>Crea y construye proyectos con gente como tú</h1>
          <div class="btn-main-content" className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={handleLogin} className={classes.blueButton}>
              Iniciar Sesión
            </Button>
            <Button variant="contained" color="secondary" onClick={handleRegister} className={classes.whiteButton}>
              Registrarse
            </Button>
          </div>
        </div>
      </div>

      <Login open={openLogin} onClose={handleCloseLogin} />
      <Register open={openRegister} onClose={handleCloseRegister} />
    </div>
  );
}

export default GestorIngreso;
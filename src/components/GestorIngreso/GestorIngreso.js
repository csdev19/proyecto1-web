import React from 'react';
import Button from '@material-ui/core/Button';

import Login from './../Login/Login';
import Register from './../Register/Register';

function GestorIngreso() {
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
      <div class="parte1">
        <img src={process.env.PUBLIC_URL + '/images/portada_login.png'} alt="imagen portada" className="imagen-ingreso" />
      </div>
      <div class="parte2">
        <div>
          <h1>Crea y construye proyectos con gente como tu</h1>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Iniciar Sesion
          </Button>
          <Button variant="contained" color="secondary" onClick={handleRegister}>
            Registrarse
          </Button>
        </div>
      </div>

      <Login open={openLogin} onClose={handleCloseLogin} />
      <Register open={openRegister} onClose={handleCloseRegister} />
    </div>
  );
}

export default GestorIngreso;

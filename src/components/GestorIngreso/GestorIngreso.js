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
      <div class="part1" style={{ backgroundImage:`url(${process.env.PUBLIC_URL + '/images/portada_login2.jpg'})` }}>
        {/* <img src={process.env.PUBLIC_URL + '/images/portada_login2.jpg'} alt="imagen portada" className="imagen-ingreso" /> */}
      </div>
      <div class="part2">
        <div class="part2-content">
          <h1>Crea y construye proyectos con gente como tu</h1>
          <div class="btn-content">
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Iniciar Sesion
            </Button>
            <Button variant="contained" color="secondary" onClick={handleRegister}>
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
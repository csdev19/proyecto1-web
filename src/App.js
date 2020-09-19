import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ComponentePrueba from "./components/ComponentePrueba";
// import GestorIngreso from './components/GestorIngreso/GestorIngreso';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />

      {/* <GestorIngreso /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={process.env.PUBLIC_URL + '/images/portada_login.png'} alt="imagen portada" className="hola" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ComponentePrueba />
      </header> */}
    </div>
  );
}

export default App;

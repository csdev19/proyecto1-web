import React, { useState, useEffect} from 'react'

import CardExample from './../CardExample';
import ClippedDrawer from './../DrawerExample';

export const Home = () => {

  const [itemsList, stateItemsList] = useState([]);

  useEffect( async () => {
    // Actualiza el título del documento usando la API del navegador
    const url = 'http://localhost:3000/publication/getPublications';

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("Home -> data", data)
    
    stateItemsList(data);
  }, []);


  return (
    <>
      {itemsList.map((item, index) => (
        <CardExample />
      ))}


    </>
  );
};

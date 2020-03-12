import React, { useState, useEffect } from "react";
import axios from 'axios';


function Frase(props) {
  return ( 
    <div className='frase'>
        <h1>{props.frases.quote}</h1>
        <p>- {props.frases.author}</p>
    </div>
  )
}

function App() {
  const [frases, obtenerFrases]= useState({});

  const consultaApi= async ()=>{
    const resultado= await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //console.log(resultado.data[0])

    // agregar el resultado de la API al state (similar a como si fuera this.setState)
    obtenerFrases(resultado.data[0]);
    console.log(resultado)
  }

// CONSULTAR A UNA RED aPI
useEffect( ()=>{
  consultaApi()
},[]);
 
 console.log(frases)
  return(
    <div className='contenedor'>
      <Frase
      frases={frases}
      />
      <button
      onClick={consultaApi}
      >
        Generar Nueva
      </button>
    </div>
  )

}

export default App;

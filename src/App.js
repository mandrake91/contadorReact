import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import free from './imagenes/free.png';
import { useState } from 'react';

function App() {

  //es el hook use state, el primero numclics es el valor y el segundo es la funcion que me permite actualizarlo
  const [numClics, setNumClics] = useState(0); //el 0 es el valor inicial del numero de clics

  const manejarClic = () => { /*funcion flecha*/
    setNumClics(numClics + 1); //el set agrega el valor actual mas 1
    
  };

  const reinciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={free}
            alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
            <Contador numClics={numClics} />
            <Boton 
              texto='Clic'
              esBotonDeClic={true}
              manejarClic={manejarClic}
            />
            <Boton 
              texto='Reinciar'
              esBotonDeClic={false}
              manejarClic={reinciarContador}
            />
        </div>
    </div>
  );
}

export default App;

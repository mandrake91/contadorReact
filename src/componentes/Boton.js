import React from 'react';
import '../stylesheets/Boton.css';

function Boton ({ texto, manejarClic /*es una funcion*/, esBotonDeClic/*es booleano para saber el tipo de boton*/}) { 
    return (
        <button
            className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}
        >
            {texto}
        </button>
    )
}

export default Boton;
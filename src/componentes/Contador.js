import React from 'react';
import '../stylesheets/Contador.css'

function Contador ({ numClics }) { //sintaxis de desestructurazcion se llama el valor del propr y nop el prop entero
  return (
    <div className='contador'>
        {numClics}
    </div>
  )
}

export default Contador;
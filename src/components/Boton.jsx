import React from 'react';


function Boton(props) {

  const esOperador = val => {
    return isNaN(val);
  };

  return (
    <div
      id={props.id}
      className={`boton-contenedor ${props.className} ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.hacerClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
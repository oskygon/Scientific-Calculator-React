import React from 'react';


const BotonClear = (props) => (
  <div id={props.id} className='border-2 border-red-900 w-10  rounded-xl  text-center text-md transition-colors duration-300  hover:border-red-700 hover:text-gray-300' onClick={props.hacerClear}>
    {props.children}
  </div>
);

export default BotonClear;
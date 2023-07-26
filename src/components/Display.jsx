import React from 'react';


const Display = ({ input }) => (
  <div id="display" className='flex items-center justify-end h-10 pl-12 w-full py-5 px-3 border-2 border-red-900 text-gray-100 text-bold font-inter bg-gray-900 rounded-xl '>
    {input}      
  </div>
); 

export default Display;
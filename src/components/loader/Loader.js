import React from 'react';
import loader from '../../images/loader.gif'

const Loader = () => {
    return (
        <div className="flex justify-center w-full items-center py-10">
         <img src={loader} alt="" className="w-1/6"/>
  </div>
  );
};

export default Loader;
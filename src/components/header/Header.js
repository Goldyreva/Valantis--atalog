import React from 'react';
import GradientLine from "../gradientLine/GradientLine";

const Header = () => {
    return (
        <div className="flex justify-between items-center flex-col bg-blue-200 sm:px-5 px-2 shadow-md ">
             <h1 className="font-bold text-blue-500 text-4xl my-4">Каталог</h1>
             <GradientLine/>
        </div>
  );
};

export default Header;
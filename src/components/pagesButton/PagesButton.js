import React from 'react';
import {useActions} from "../../hooks/useActions";

const PagesButton = ({text, isActive}) => {
 const {setCurrentPage} = useActions()
 
    return (
     <div className={`px-3 py-2 m-1 border border-blue-500 rounded-xl shadow-md cursor-pointer  ${isActive ?"bg-blue-500 text-white" : "bg-blue-200 transition linear delay-100 hover:bg-blue-100 hover:shadow-lg active:bg-blue-500 active:text-white"}`} onClick={() => setCurrentPage(text)}>
      <p>{text}</p>
    </div>
  );
};

export default PagesButton;
import React from 'react';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";

const PagesButton = ({text, isActive}) => {
 const {setCurrentPage} = useActions()
    return (
     <div className={`px-3 py-2 m-1 border border-blue-500 rounded-xl shadow-md cursor-pointer ${isActive ?"bg-blue-500 text-white" : "bg-blue-200"}`} onClick={() => setCurrentPage(text)}>
      <p>{text}</p>
    </div>
  );
};

export default PagesButton;
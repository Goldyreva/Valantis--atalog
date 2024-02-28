import React from 'react';
import {useSelector} from "react-redux";
import {getPagesArray} from "../../utils/pages";
import PagesButton from "../pagesButton/PagesButton";

const Pagination = () => {
 const pages = useSelector(state => state.pages)
 let pagesArray = getPagesArray(pages.pagesCount)
    return (
     <div className="flex justify-center w-full flex-wrap">
      <PagesButton text={'<'} btnKey={'previousBtn'}/>
      {
       pagesArray.map((page) => {
        if(page > pages.currentPage - 3 && page < pages.currentPage + 3)
         return <PagesButton text={page} btnKey={page} isActive={pages.currentPage === page }/>
       })
      }
      
      <PagesButton text={'>'} btnKey={'nextBtn'}/>
     </div>
  );
};

export default Pagination;
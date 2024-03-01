import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getPagesArray} from "../../utils/pages";
import PagesButton from "../pagesButton/PagesButton";

const Pagination = () => {
 const pages = useSelector(state => state.pages)
 const [pagesArray, setPagesArray] = useState([])

 //подсчет количества страниц
 useEffect(() => {
  setPagesArray(getPagesArray(pages.pagesCount))
 }, [pages.pagesCount, pages.pagesCount])
    return (
     <div className="flex justify-center w-full flex-wrap">
      {
      pages.currentPage !== 1
      ?<PagesButton text={'<'} btnKey={'previousBtn'}/>
       : <></>
     }

      {
       pagesArray.map((page) => {
        if(page > pages.currentPage - 3 && page < pages.currentPage + 3)
         return <PagesButton text={page} key={page} isActive={pages.currentPage === page }/>
       })
      }
      {
      pages.currentPage !== pages.pagesCount
      ?<PagesButton text={'>'} btnKey={'nextBtn'}/>
       : <></>
     }
     </div>
  );
};

export default Pagination;
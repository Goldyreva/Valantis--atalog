import React, {useState} from 'react';
import {useEffect} from "react";
import {getItems} from '../api/products/products'
import ProductItem from "../components/productItem/ProductItem";
import Pagination from "../components/pagination/Pagination";
import Loader from "../components/loader/Loader";
import {useSelector} from "react-redux";
import FilterForm from "../components/filterForm/FilterForm";

const ProductsPage = () => {
 const products = useSelector(state => state.products)
 const pages = useSelector(state => state.pages)
 
 const [productsArray, setProductsArray] = useState([])
 const [isLoading, setLoading] = useState(true)
 const [isFoundIds, setFoundIds] = useState(true)

 //запрос на обновление товаров при изменении массива идентификаторов
 useEffect(() => {
  setLoading(true)
  const fetchData = async () => {
   if(products.ids.length > 0){
    let items = await getItems(pages.currentPage - 1, products.ids)
    setProductsArray(items)
    setFoundIds(true)
   }else {
    setFoundIds(false)
   }
   setLoading(false)
  }
  
  fetchData()
 }, [products.ids])

  return (
   <div className="sm:px-5 px-2">
    <FilterForm/>

    <div className="flex justify-start flex-wrap">
     {
    isLoading ?
    <Loader/>
   : isFoundIds
     ? productsArray.map(product =>
         <ProductItem product={product} key={product.id}/>
       )
     : <div className="font-semibold mx-auto my-2">По вашему запросу товары не найдены</div>}
    </div>
    {
    isFoundIds
    ? <Pagination/>
     : <></>
    }
   </div>
   );
 };


export default ProductsPage;
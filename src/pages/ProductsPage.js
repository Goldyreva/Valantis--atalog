import React, {useState} from 'react';
import {useEffect} from "react";
import {getItems} from '../api/products/products'
import ProductItem from "../components/productItem/ProductItem";
import Pagination from "../components/pagination/Pagination";
import Loader from "../components/loader/Loader";
import {useSelector} from "react-redux";

const ProductsPage = () => {
 const productIds = useSelector(state => state.productIds)
 const pages = useSelector(state => state.pages)
 
 const [productsArray, setProductsArray] = useState([])
 const [isLoading, setLoading] = useState(false)
 
 useEffect(() => {
  setLoading(true)
  const fetchData = async () => {
   if(pages.pagesCount > 0){
    let items = await getItems(pages.currentPage - 1, productIds.ids)
    setProductsArray(items)
    setLoading(false)
   }
  }
  
  fetchData()
 }, [pages.currentPage, pages.pagesCount])

  return (
   <div>

    <div className="flex justify-start flex-wrap">
     {
    isLoading ?
    <Loader/>
   : productsArray.map(product =>
     <ProductItem product={product} />
     )}
    </div>
    <Pagination/>
   </div>
   );
 };


export default ProductsPage;
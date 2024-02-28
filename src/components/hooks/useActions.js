import {actions as productsActions} from "../../store/products/products.slice";
import {actions  as pagesActions} from "../../store/pages/pages.slice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";


const rootActions = {
    ...productsActions,
    ...pagesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    
    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch])
}
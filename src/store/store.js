import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducer as productsReducer} from "./products/products.slice";
import {reducer as pagesReducer} from "./pages/pages.slice";


const reducers = combineReducers({products: productsReducer, pages: pagesReducer})
export const store = configureStore({
    reducer: reducers,
})

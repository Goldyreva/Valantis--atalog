import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducer as productIdsReducer} from "./products/products.slice";
import {reducer as pagesReducer} from "./pages/pages.slice";


const reducers = combineReducers({productIds: productIdsReducer, pages: pagesReducer})
export const store = configureStore({
    reducer: reducers,
})

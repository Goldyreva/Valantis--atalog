import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ids: [],
    brands: [],
}
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductIds: (state, action) => {
            state.ids = action.payload
        },
        setProductBrands : (state, action) => {
            state.brands = action.payload
        }
    }
})

export const { actions, reducer } = productSlice
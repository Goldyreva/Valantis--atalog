import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ids: [],
}
export const productIdsSlice = createSlice({
    name: 'productIds',
    initialState,
    reducers: {
        setProductIds: (state, action) => {
            state.ids = action.payload
        },
    }
})

export const { actions, reducer } = productIdsSlice
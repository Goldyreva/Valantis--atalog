import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pagesCount: 0,
    currentPage: 1
}
export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setPagesCount: (state, action) => {
            state.pagesCount = action.payload
        },
        setCurrentPage: (state, action) => {
            if(action.payload === '<' && state.currentPage > 1){
                state.currentPage -= 1
            } else if (action.payload === '>' && state.currentPage < state.pagesCount){
                state.currentPage += 1
            } else if (action.payload > 0 && action.payload <= state.pagesCount) {
                state.currentPage = action.payload
            } 
        }
    }
})

export const { actions, reducer } = pagesSlice
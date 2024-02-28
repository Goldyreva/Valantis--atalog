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
//            console.log(state)
        },
        setCurrentPage: (state, action) => {
            console.log(action.payload)
            console.log(state.currentPage)
            if(action.payload === '<' && state.currentPage > 1){
                state.currentPage -= 1
            } else if (action.payload === '>' && state.currentPage < state.pagesCount){
                state.currentPage += 1
            } else if (action.payload > 0 && action.payload <= state.pagesCount) {
                state.currentPage = action.payload
            } 
            console.log(state.currentPage)
        }
    }
})

export const { actions, reducer } = pagesSlice
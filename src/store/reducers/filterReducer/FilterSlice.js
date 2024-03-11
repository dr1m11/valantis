import {createSlice} from "@reduxjs/toolkit";
import {fetchFilter} from "./ActionCreators.js";


const initialState = {
    filterIds: [],
    isLoadingFilter: false,
    errorFilter: '',
    toggleFilter: false,
    searchValueEmpty: true
}

const filterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetSearch: (state) => {
            state.searchValueEmpty = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchFilter.fulfilled,
            (state, action) => {
                state.filterIds = action.payload
                state.isLoadingFilter = false
                state.errorFilter = ''
                state.searchValueEmpty = false
            }
        );
        builder.addCase(
            fetchFilter.pending,
            (state) => {
                state.isLoadingFilter = true
            }
        );
        builder.addCase(
            fetchFilter.rejected,
            (state, action) => {
                state.isLoadingFilter = false
                state.errorFilter = action.payload
                state.toggleFilter = !state.toggleFilter
            }
        );
    },
})

export default filterSlice.reducer
export const {actions} = filterSlice
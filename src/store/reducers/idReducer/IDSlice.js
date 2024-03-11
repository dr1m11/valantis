import {createSlice} from "@reduxjs/toolkit";
import {fetchId} from "./ActionCreators.js";


const initialState = {
    ids: [],
    isLoadingId: false,
    errorId: '',
    toggleError: false
}

const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchId.fulfilled,
            (state, action) => {
                state.ids = action.payload
                state.isLoadingId = false
                state.errorId = ''
            }
        );
        builder.addCase(
            fetchId.pending,
            (state) => {
                state.isLoadingId = true
            }
        );
        builder.addCase(
            fetchId.rejected,
            (state, action) => {
                state.isLoadingId = false
                state.errorId = action.payload
                state.toggleError = !state.toggleError
            }
        );
    },
})

export default idSlice.reducer
import {createSlice} from "@reduxjs/toolkit";
import {fetchFields} from "./ActionCreators.js";


const initialState = {
    brands: [],
    isLoadingFields: false,
    errorField: '',
    toggleField: false,
}

const fieldsSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchFields.fulfilled,
            (state, action) => {
                state.brands = action.payload.filter(item => item !== null).sort((a, b) => a.localeCompare(b))
                state.isLoadingFields = false
                state.errorField = ''
            }
        );
        builder.addCase(
            fetchFields.pending,
            (state) => {
                state.isLoadingFields = true
            }
        );
        builder.addCase(
            fetchFields.rejected,
            (state, action) => {
                state.isLoadingFields = false
                state.errorField = action.payload
                state.toggleField = !state.toggleField
            }
        );
    },
})

export default fieldsSlice.reducer
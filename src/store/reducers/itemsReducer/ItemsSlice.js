import {createSlice} from "@reduxjs/toolkit";
import {fetchItems} from "./ActionCreators.js";

const initialState = {
    posts: [],
    errorPost: '',
    isLoadingPost: false,
    errorToggle: false
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchItems.pending, (state) => {
                state.isLoadingPost = true
            }
        );
        builder.addCase(
            fetchItems.fulfilled, (state, action) => {
                const kostil = {}
                state.posts = action.payload.filter(({id}) =>(!kostil[id] && (kostil[id] = 1))).filter((_, index) => index < 50)
                state.isLoadingPost = false
                state.errorPost = ''
            }
        )
        builder.addCase(
            fetchItems.rejected, (state, action) => {
                state.isLoadingPost = false
                state.errorPost = action.payload
                state.errorToggle = !state.errorToggle
            }
        )
    }
})

export default itemsSlice.reducer
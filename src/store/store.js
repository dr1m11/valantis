import {combineReducers, configureStore} from "@reduxjs/toolkit";
import idReducer from './reducers/idReducer/IDSlice.js'
import itemsReducer from './reducers/itemsReducer/ItemsSlice.js'
import fieldsReducer from './reducers/fieldsReducer/FieldsSlice.js'
import filterReducer from './reducers/filterReducer/FilterSlice.js'

const rootReducer = combineReducers({
    idReducer, itemsReducer, fieldsReducer, filterReducer
})

export const store = configureStore({
    reducer: rootReducer
})
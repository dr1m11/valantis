import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {header} from "../../../constants/header.js";

export const fetchItems = createAsyncThunk(
    "posts/fetchItems",
    async (ids, thunkAPI) => {
        try {
            const result = await axios({
                url: 'http://api.valantis.store:40000/',
                method: 'post',
                data: {
                    "action": "get_items",
                    "params": {'ids': ids
                    }
                },
                headers: header,
            })
            return result.data.result
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {header} from "../../../constants/header.js";

export const fetchFields = createAsyncThunk(
    'posts/fetchFields',
    async (_, thunkAPI) => {
        try {
            const response = await axios({
                url: 'https://api.valantis.store:41000/',
                method: 'post',
                data: {
                    "action": "get_fields",
                    "params": {"field": "brand", "offset": 0}
                },
                headers: header,
            })
            return [...new Set(response.data.result)]
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {header} from "../../../constants/header.js";

export const fetchId = createAsyncThunk(
    'posts/fetchId',
    async (info, thunkAPI) => {
        try {
            const response = await axios({
                url: 'https://api.valantis.store:41000/',
                method: 'post',
                data: {
                    "action": "get_ids",
                    "params": {"offset": info, 'limit': 100}
                },
                headers: header,
            })
            const data = response.data
            return [...new Set(data.result)]
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

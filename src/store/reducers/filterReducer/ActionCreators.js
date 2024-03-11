import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {header} from "../../../constants/header.js";

export const fetchFilter = createAsyncThunk(
    'posts/fetchFilter',
    async (info, thunkAPI) => {
        try {
            const response = await axios({
                url: 'http://api.valantis.store:40000/',
                method: 'post',
                data: {
                    "action": "filter",
                    "params": info
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

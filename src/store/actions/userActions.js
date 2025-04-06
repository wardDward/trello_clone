import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkEmail = createAsyncThunk("users/checkEmail", async (data, thunkApi) => {
    try {
        await axios.get(`http://localhost:8000/api/users/register_email?email=${data}`)
        return
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})

export const createAccount = createAsyncThunk("users/createAccount", async (data, thunkApi) => {
    try {
        await axios.post('http://localhost:8000/api/auth/register', data)
    } catch (error) {
        data.password = ''
        data.password_confirmation = ''
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})
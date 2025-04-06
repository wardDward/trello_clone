import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const checkEmail = createAsyncThunk("users/checkEmail", async (data, thunkApi) => {
    try {
        await axios.get(`api/users/email?email=${data}`)
        return
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})

export const checkRegisterEmail = createAsyncThunk("users/checkRegisterEmail", async (data, thunkApi) => {
    try {
        await axios.get(`/api/users/register_email?email=${data}`)
        return
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})

export const createAccount = createAsyncThunk("users/createAccount", async (data, thunkApi) => {
    try {
        await getCSRFToken()
        await axios.post('/api/auth/register', data)
        await thunkApi.dispatch(authenticated())
        return
    } catch (error) {
        data.password = ''
        data.password_confirmation = ''
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})

export const logIn = createAsyncThunk("users/logIn", async (data, thunkApi) => {
    try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post('/api/auth/login', data)
        await thunkApi.dispatch(authenticated())
        return
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})



export const authenticated = createAsyncThunk("users/authenticated", async (_, thunkApi) => {
    try {
        await axios.get("/sanctum/csrf-cookie");
        const response = await axios.get('/api/auth/user');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
})

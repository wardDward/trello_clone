import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkEmail = createAsyncThunk("users/checkEmail", async (data, thunkApi) => {
    try {
       await axios.get(`http://localhost:8000/api/users/email?email=${data}`)
       return
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.errors)
    }
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        user: {},
        errorMessage: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkEmail.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(checkEmail.fulfilled, (state) =>{
            state.isLoading = false
        })
        builder.addCase(checkEmail.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })

     }
})

export default userSlice.reducer
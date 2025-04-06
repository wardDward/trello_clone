import { createSlice } from "@reduxjs/toolkit";
import { checkEmail, createAccount } from "../actions/userActions";




export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        user: {},
        errorMessage: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkEmail.pending, (state) => {
            state.isLoading = true
            state.errorMessage = {}

        })
        builder.addCase(checkEmail.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(checkEmail.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(createAccount.pending, (state) => {
            state.isLoading = true
            state.errorMessage = {}
        })
        builder.addCase(createAccount.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
    }
})

export default userSlice.reducer
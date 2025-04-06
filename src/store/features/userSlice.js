import { createSlice } from "@reduxjs/toolkit";
import { authenticated, checkEmail, checkRegisterEmail, createAccount } from "../actions/userActions";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        user: null,
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
        builder.addCase(checkRegisterEmail.pending, (state) => {
            state.isLoading = true
            state.errorMessage = {}

        })
        builder.addCase(checkRegisterEmail.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(checkRegisterEmail.rejected, (state, action) => {
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
        builder.addCase(authenticated.pending, (state) => {
            state.isLoading = true
            state.errorMessage = {}
            state.user = {}
        })
        builder.addCase(authenticated.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(authenticated.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
            state.user = {}
        })
    }
})

export default userSlice.reducer
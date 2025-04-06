import { createSlice } from "@reduxjs/toolkit";
import { authenticated, checkEmail, checkRegisterEmail, createAccount, logIn } from "../actions/userActions";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
        user: null,
        errorMessage: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkEmail.pending, (state) => {
            state.isLoading = true
            state.errorMessage = null
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
        builder.addCase(logIn.fulfilled, (state) => {
            state.isLoading = false
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(false))
        })
        builder.addCase(logIn.pending, (state) => {
            state.isLoading = true
            state.errorMessage = {}
        })
        builder.addCase(authenticated.pending, (state) => {
            state.errorMessage = {}
            state.user = {}
        })
        builder.addCase(authenticated.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            state.user = action.payload
        })
        builder.addCase(authenticated.rejected, (state, action) => {
            localStorage.removeItem('isLoggedIn');
            state.isLoading = false
            state.errorMessage = action.payload
            state.isLoggedIn = false;
            state.user = null
        })
    }
})

export default userSlice.reducer
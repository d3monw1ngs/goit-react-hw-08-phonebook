import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, fetchCurrentUser } from "./authOperations";

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, state => {
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthHeader = token => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register', 
    async ({name, email, password}, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', {
            name,
            email,
            password,
        });
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message 
        );
    }
});

export const login = createAsyncThunk(
    'auth/login', 
    async ({email, password}, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', {email, password});
                setAuthHeader(response.data.token);
                return response.data;
            } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response ? error.response.data : error.message 
            );
        }
});

export const logout = createAsyncThunk(
    'auth/logout', 
    async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message
        );
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh', 
    async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('User not found');
    }

    try {
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message
        );
    }
});
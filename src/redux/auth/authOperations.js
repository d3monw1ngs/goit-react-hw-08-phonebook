import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userData);
        setAuthToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userData);
        setAuthToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        setAuthToken(null);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('No token found');
    }

    setAuthToken(persistedToken);

    try {
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
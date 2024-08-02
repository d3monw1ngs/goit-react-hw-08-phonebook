import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};

export const register = createAsyncThunk(
    'auth/register', 
    async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userData);
        if (response.data && response.data.token) {
            setAuthToken(response.data.token);
            return response.data;
        } else {
            return thunkAPI.rejectWithValue('Invalid server respone: Missing token');
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message 
        );
    }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userData);
        if (response.data && response.data.token) {
            setAuthToken(response.data.token);
            return response.data;
        } else {
            return thunkAPI.rejectWithValue('Invalid server response: Missing token');
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message 
        );
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        setAuthToken(null);
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message
        );
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(
            error.response ? error.response.data : error.message
        );
    }
});
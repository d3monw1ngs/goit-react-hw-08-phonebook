import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../../redux/contacts/contactsOperations";
import { toast } from "react-toastify";

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
        const response = await axios.post('/users/signup', {name, email, password});
            setAuthHeader(response.data.token); // Set the authorization header
            thunkAPI.dispatch(fetchContacts()); // Fetch contacts after registration
            toast.success('Registration successful!');
            return response.data;
        } catch (error) {
            toast.error('Registration failed!');
            return thunkAPI.rejectWithValue(error.respone.data.message);
    }
});

export const logIn = createAsyncThunk(
    'auth/login', 
    async ({email, password}, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', {email, password});
                setAuthHeader(response.data.token); // Set the authorization header
                thunkAPI.dispatch(fetchContacts()); // Fetch contacts after login
                return response.data;
            } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
});

export const logOut = createAsyncThunk(
    'auth/logout', 
    async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh', 
    async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken); // Ensure header is set before the request
        const response = await axios.get('/users/current');
        thunkAPI.dispatch(fetchContacts()); // Fetch contacts after user refresh
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
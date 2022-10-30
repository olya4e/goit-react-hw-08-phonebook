import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/service/axiosConfig';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/users/signup', credentials);
      token.set(response.data.token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken !== null) {
      try {
        token.set(persistedToken);
        const response = await axios.get('/users/current');
        console.log(response.data);
        return response.data;
      } catch (err) {
        token.unset();
        return thunkAPI.rejectWithValue(err.message);
      }
    }
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
);

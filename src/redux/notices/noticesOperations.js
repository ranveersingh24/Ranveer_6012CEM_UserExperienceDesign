import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://yourpets.onrender.com/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (fetchInfo, thunkAPI) => {
    try {
      const response = await axios.get(`/notices${fetchInfo}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    try {
      const res = await axios.post('/notices', newNotice);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/added/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'getNoticeById --- operations: ',
        error.message
      );
    }
  }
);

export const getAllOwnNotices = createAsyncThunk(
  'notices/getAllOwnNotices',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/user/added${data}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/user/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'notices/removeFromFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavoriteCategory = createAsyncThunk(
  'notices/removeFromFavoriteWithOutR',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavoriteNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/user/favorite');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllFavNotices = createAsyncThunk(
  'notices/fetchAllFavNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/user/favorite');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async (fetchInfo, thunkAPI) => {
    try {
      const response = await axios.get(`notices/users/search${fetchInfo}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getNoticesBySearch = createAsyncThunk(
  'search/getNoticesBySearch',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(
        `/notices/users/search?category=${data.category}&title=${data.input}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavNoticesbyCategory = createAsyncThunk(
  'notices/getFavNoticesbyCategory',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/user/favorite${params}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getNoticesByFilter = createAsyncThunk(
  'notices/getNoticesByFilter',
  async (params, thunkAPI) => {
    try {
      const age = params.age;
      const sex = params.sex;

      if (age && sex) {
        const response = await axios.get(
          `/notices/users/filter?date=${age}&sex=${sex}`
        );
        return response.data;
      } else if (age) {
        const response = await axios.get(`/notices/users/filter?date=${age}`);
        return response.data;
      } else if (sex) {
        const response = await axios.get(`/notices/users/filter?sex=${sex}`);
        return response.data;
      } else {
        const response = await axios.get(`/notices/users/filter`);
        return response.data;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

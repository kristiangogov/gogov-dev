import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk('api/fetchData', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("/.netlify/functions/getAllBlogPosts");
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const contentfulSlice = createSlice({
    name: 'contentful',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default contentfulSlice.reducer;

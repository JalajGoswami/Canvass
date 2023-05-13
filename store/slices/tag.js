import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API'
import { errorReducer, loadingReducer } from 'utils/services'

const initialState = {
    categories: null,
    tags: null,
    trendingTags: null,
    loading: false,
    error: null
}

const tag = createSlice({
    name: 'tag',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, loadingReducer)
        builder.addCase(fetchCategories.rejected, errorReducer)
        builder.addCase(fetchCategories.fulfilled,
            (state, { payload }) => {
                state.categories = payload
                state.loading = false
            })
    }
})

export const fetchCategories = createAsyncThunk('tag/fetchCategories',
    async () => {
        const res = await API('/tag/categories').get()
        return res.data
    }
)

export const { } = tag.actions

export default tag.reducer
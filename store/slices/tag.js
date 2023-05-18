import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API'
import { errorReducer, loadingReducer, successReducer } from 'utils/services'

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
            successReducer('categories'))

        builder.addCase(getTrendingTags.pending, loadingReducer)
        builder.addCase(getTrendingTags.rejected, errorReducer)
        builder.addCase(getTrendingTags.fulfilled,
            successReducer('trendingTags'))

        builder.addCase(getTagByCategory.pending, loadingReducer)
        builder.addCase(getTagByCategory.rejected, errorReducer)
        builder.addCase(getTagByCategory.fulfilled,
            successReducer('tags'))

        builder.addCase(searchTag.pending, loadingReducer)
        builder.addCase(searchTag.rejected, errorReducer)
        builder.addCase(searchTag.fulfilled,
            successReducer('tags'))
    }
})

export const fetchCategories = createAsyncThunk('tag/fetchCategories',
    async () => {
        const res = await API('/tag/categories').get()
        return res.data
    }
)

export const getTrendingTags = createAsyncThunk('tag/fetchTrendingTags',
    async () => {
        const res = await API('/tag/trending-tags').get()
        return res.data
    }
)

export const getTagByCategory = createAsyncThunk('tag/getTagByCategory',
    async (id) => {
        const res = await API(`/tag/trending-tags?category=${id}`).get()
        return res.data
    }
)

export const searchTag = createAsyncThunk('tag/searchTag',
    async (params) => {
        const res = await API('/tag/search-tags').get({ params })
        return res.data
    }
)

export const { } = tag.actions

export default tag.reducer
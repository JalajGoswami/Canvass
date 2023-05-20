import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API'
import { errorReducer, loadingReducer } from 'utils/services'

const initialState = {
    feedPosts: [],
    pages: { current: 0, last: 0 },
    userPosts: null,
    loading: false,
    error: null
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(createPost.pending, loadingReducer)
        builder.addCase(createPost.rejected, errorReducer)
        builder.addCase(createPost.fulfilled,
            (state, { payload }) => {
                state.feedPosts.unshift(payload)
                state.loading = false
            })
    }
})

export const createPost = createAsyncThunk('post/createPost',
    async (body) => {
        const res = await API('/post').post(body, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        return res.data
    }
)

export const getFeedPosts = createAsyncThunk('post/getFeedPosts',
    async () => {
        // const res = await API('/tag/trending-tags').get()
        // return res.data
    }
)

export const { } = post.actions

export default post.reducer
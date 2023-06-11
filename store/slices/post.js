import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API'
import { errorReducer, loadingReducer, pendingReducer } from 'utils/services'

const initialState = {
    feedPosts: [],
    userPosts: null,
    pages: {
        feed: { current: 0, total: 0 },
        user: { current: 0, total: 0 }
    },
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

        builder.addCase(getFeedPosts.pending, pendingReducer)
        builder.addCase(getFeedPosts.rejected, errorReducer)
        builder.addCase(getFeedPosts.fulfilled,
            (state, { payload }) => {
                state.pages.feed = payload.pages
                state.feedPosts = state.feedPosts.concat(payload.data)
            })

        builder.addCase(refreshFeedPosts.pending, loadingReducer)
        builder.addCase(refreshFeedPosts.rejected, errorReducer)
        builder.addCase(refreshFeedPosts.fulfilled,
            (state, { payload }) => {
                state.pages.feed = payload.pages
                state.feedPosts = payload.data
                state.loading = false
            })

        builder.addCase(getUserPosts.pending, pendingReducer)
        builder.addCase(getUserPosts.rejected, errorReducer)
        builder.addCase(getUserPosts.fulfilled,
            (state, { payload }) => {
                state.pages.user = payload.pages
                if (payload.pages.current === 1)
                    state.userPosts = payload.data
                else
                    state.userPosts = state.userPosts.concat(payload.data)
            })

        builder.addCase(postAction.pending, pendingReducer)
        builder.addCase(postAction.rejected, errorReducer)
        builder.addCase(postAction.fulfilled, () => { })
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
    async (page) => {
        const p = page || 1
        const res = await API(`/post/feed?page=${p}`).get()
        return res.data
    }
)

export const refreshFeedPosts = createAsyncThunk('post/refreshFeedPosts',
    async () => {
        const res = await API('/post/feed?page=1').get()
        return res.data
    }
)

export const getUserPosts = createAsyncThunk('post/getUserPosts',
    async (id, page) => {
        const p = page || 1
        const res = await API(`/post/user/${id}?page=${p}`).get()
        return res.data
    }
)

export const postAction = createAsyncThunk('post/postAction',
    async ([id, action]) => {
        const res = await API(`/post/${id}/${action}`).get()
        return res.data
    }
)

export const { } = post.actions

export default post.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API';
import { errorReducer, loadingReducer } from 'utils/services'

const initialState = {
    loading: false,
    isAuthorized: null,
    accessToken: null,
    error: null,
    user: null
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isAuthorized = false
            state.accessToken = null
        },
        userRestored: (state, { payload }) => {
            const newState = {
                ...payload, loading: false, error: null
            }
            Object.keys(newState).forEach(key => {
                state[key] = newState[key]
            })
        },
        userRestoreFailed: state => {
            state.loading = false
            state.isAuthorized = false
        },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, loadingReducer)
        builder.addCase(login.rejected, errorReducer)
        builder.addCase(login.fulfilled, (state, { payload }) => {
            process.env.ACCESS_TOKEN = payload.accessToken
            state.loading = false
            state.isAuthorized = Boolean(payload.accessToken)
            state.accessToken = payload.accessToken
            state.user = payload.user
        })

        builder.addCase(getProfile.pending, loadingReducer)
        builder.addCase(getProfile.rejected, (state, { error }) => {
            state.error = error?.message
            state.loading = false
            state.isAuthorized = false
        })
        builder.addCase(getProfile.fulfilled, (state, { payload }) => {
            state.isAuthorized = true
            state.user = payload
            state.loading = false
        })

        builder.addCase(updateProfile.pending, loadingReducer)
        builder.addCase(updateProfile.rejected, errorReducer)
        builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
            state.user = { ...state.user, ...payload }
            state.loading = false
        })
    }
})

export const login = createAsyncThunk('user/login',
    async (body) => {
        const res = await API('/auth/login').post(body)
        return res.data
    }
)

export const getProfile = createAsyncThunk('user/getProfile',
    async () => {
        const res = await API('/user/profile').get()
        return res.data
    }
)

export const updateProfile = createAsyncThunk('user/updateProfile',
    async (body) => {
        const res = await API('/user/profile').patch(body, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        return res.data
    }
)

export const {
    logOut, userRestored, userRestoreFailed
} = user.actions

export default user.reducer
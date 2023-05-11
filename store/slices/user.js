import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorReducer } from 'utils/services'

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
            state.user = null
        },
        userRestored: (state, { payload }) => {
            const newState = { ...payload, loading: false }
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
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isAuthorized = Boolean(payload.accessToken)
            state.accessToken = payload.accessToken
            state.user = payload
            state.error = null
        })
        builder.addCase(login.rejected, errorReducer)
    }
});


export const login = createAsyncThunk('user/login',
    async (body) => {
        const res = await API('/auth/login').post(body)
        return res.data
    }
)


export const {
    logOut, userRestored, userRestoreFailed
} = user.actions

export default user.reducer
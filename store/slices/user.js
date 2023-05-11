import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from 'utils/API';
import { errorReducer, pendingReducer } from 'utils/services'

const initialState = {
    loading: true,
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
        builder.addCase(login.pending, pendingReducer)
        builder.addCase(login.rejected, errorReducer)
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isAuthorized = Boolean(payload.accessToken)
            state.accessToken = payload.accessToken
            state.user = payload.user
        })

        builder.addCase(createProfile.pending, pendingReducer)
        builder.addCase(createProfile.rejected, errorReducer)
        builder.addCase(createProfile.fulfilled, (state, { payload }) => {
            state.user = payload.user
        })
    }
});


export const login = createAsyncThunk('user/login',
    async (body) => {
        const res = await API('/auth/login').post(body)
        return res.data
    }
)

export const createProfile = createAsyncThunk('user/createProfile',
    async (body) => {
        const res = await API('/user/create-profile').post(body)
        return res.data
    }
)


export const {
    logOut, userRestored, userRestoreFailed
} = user.actions

export default user.reducer
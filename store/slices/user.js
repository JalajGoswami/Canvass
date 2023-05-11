import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    isAuthorized: null,
    accessToken: null,
    error: null,
    user: null
}

const login = createAsyncThunk('user/login', async (body) => {
    
})

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleAuthorized: (state) => {
            state.isAuthorized = !state.isAuthorized
        }
    }
});

export const { toggleAuthorized } = user.actions

export default user.reducer
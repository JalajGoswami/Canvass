import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    isAuthorized: null,
    accessToken: null,
    error: null,
    username: null,
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
});

export const { } = user.actions

export default user.reducer
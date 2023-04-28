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
        toggleAuthorized: (state) => {
            state.isAuthorized = !state.isAuthorized
        }
    }
});

export const { toggleAuthorized } = user.actions

export default user.reducer
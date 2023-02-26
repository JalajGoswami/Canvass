import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    appTheme: null,
    systemTheme: 'light',
}

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSystemTheme: (state, { payload }) => {
            state.systemTheme = payload
        }
    }
});

export const { setSystemTheme } = settings.actions

export default settings.reducer
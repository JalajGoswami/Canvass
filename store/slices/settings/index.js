import { createSlice } from '@reduxjs/toolkit'
import theme from './theme'

const initialState = {
    appTheme: null,
    systemTheme: 'light',
}

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        ...theme.reducers
    }
})

export const { setAppTheme, setSystemTheme } = settings.actions

export default settings.reducer
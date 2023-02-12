import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visible: false,
    content: '',
}

const toast = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        createToast: (state, { payload }) => {
            state.visible = true
            state.content = payload
        },
        hideToast: (state) => {
            state.visible = false
            state.content = ''
        }
    }
});

export const { createToast, hideToast } = toast.actions

export default toast.reducer
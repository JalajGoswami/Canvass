import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import toastReducer from './slices/toast'

const store = configureStore({
    reducer: {
        user: userReducer,
        toast: toastReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export default store
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import toastReducer from './slices/toast'
import settingsReducer from './slices/settings'

const store = configureStore({
    reducer: {
        user: userReducer,
        toast: toastReducer,
        settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store
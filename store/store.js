import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export default store
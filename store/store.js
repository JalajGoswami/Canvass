import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import toastReducer from './slices/toast'
import settingsReducer from './slices/settings'
import postReducer from './slices/post'
import tagReducer from './slices/tag'

const store = configureStore({
    reducer: {
        user: userReducer,
        toast: toastReducer,
        settings: settingsReducer,
        post: postReducer,
        tag: tagReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store
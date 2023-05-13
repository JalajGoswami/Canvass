import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, login, logOut, userRestored, userRestoreFailed } from '../store/slices/user'
import EncryptedStorage from 'react-native-encrypted-storage'

const saveSession = async (user) => {
    process.env.ACCESS_TOKEN = user.accessToken
    await EncryptedStorage.setItem('user', JSON.stringify(user))
}

const deleteSavedData = async () => {
    await EncryptedStorage.clear()
}

export default function useSession() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const signIn = (payload) => {
        dispatch(login(payload))
    }

    const signOut = () => {
        deleteSavedData()
        dispatch(logOut())
        process.env.ACCESS_TOKEN = null
    }

    return {
        loading: user.loading,
        isAuthorized: user.isAuthorized,
        accessToken: user.accessToken,
        signIn,
        signOut,
        error: user.error,
        user: user.user,
    }
}

export const useRootSession = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const restoreSession = async () => {
        try {
            let userData = await EncryptedStorage.getItem('user')

            if (!userData) {
                dispatch(userRestoreFailed())
                return
            }

            const userState = JSON.parse(userData)
            process.env.ACCESS_TOKEN = userState.accessToken
            dispatch(userRestored(userState))
        }
        catch (err) {
            dispatch(userRestoreFailed())
        }
    }

    useEffect(() => {
        user.user && saveSession(user)
    }, [user.user])

    useEffect(() => {
        if (!user.isAuthorized) return;
        // run on every startup for logged in user

        dispatch(getProfile())

    }, [user.isAuthorized])

    const session = useSession()

    return {
        ...session,
        restoreSession
    }
}
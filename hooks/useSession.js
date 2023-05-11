import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logOut, userRestored, userRestoreFailed } from '../store/features/userProfile'
import EncryptedStorage from 'react-native-encrypted-storage';

const saveSession = async (user) => {
    await EncryptedStorage.setItem('user', JSON.stringify(user))
    process.env.ACCESS_TOKEN = user.accessToken
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

            const userState = JSON.parse(user)
            dispatch(userRestored(userState))
        }
        catch (err) { dispatch(userRestoreFailed()) }
    }

    useEffect(() => {
        if (user.user)
            saveSession(user)
    }, [user.user])

    const session = useSession()

    return {
        ...session,
        restoreSession
    }
}
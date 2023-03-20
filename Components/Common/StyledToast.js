import React from 'react'
import { Snackbar, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { createToast, hideToast } from 'store/slices/toast'
import store from 'store/store'

export default function StyledToast() {
    const { visible, content } = useSelector(state => state.toast)
    const dispatch = useDispatch()
    const theme = useTheme()

    return (
        <Snackbar
            visible={visible}
            onDismiss={() => dispatch(hideToast())}
            style={{ width: '94%', alignSelf: 'center', marginBottom: 10 }}
            action={{
                icon: 'close', labelStyle: { color: theme.colors.onPrimary },
                onPress: () => dispatch(hideToast()),
            }}
        >
            {content}
        </Snackbar>
    )
}
export function showToast(message, duration = 3) {
    store.dispatch(createToast(message))
    setTimeout(() => store.dispatch(hideToast()), duration * 1000)
}
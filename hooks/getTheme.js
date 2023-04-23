import { useSelector } from 'react-redux'

export default function getTheme() {
    const { appTheme, systemTheme } =
        useSelector(state => state.settings)

    return {
        theme: appTheme || systemTheme,
        isDarkTheme: (appTheme || systemTheme) == 'dark'
    }
}

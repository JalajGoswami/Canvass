import store from 'store/store'

export default function dropShadow(variant = 'low', color, direction = 'down') {
    const { appTheme, systemTheme } = store.getState().settings
    const isDarkTheme = (appTheme || systemTheme) == 'dark'

    const themeFactor = isDarkTheme ? 0.8 : 1
    const sign = direction == 'up' ? -1 : (direction == 'center' ? 0 : 1)

    if (variant === 'none' || !color)
        return {}

    if (variant === 'low')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 1 * sign * themeFactor,
            },
            shadowOpacity: 0.16 * themeFactor,
            shadowRadius: 1.51,
            elevation: 2 * themeFactor
        }

    if (variant === 'medium')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 3 * sign * themeFactor,
            },
            shadowOpacity: 0.17 * themeFactor,
            shadowRadius: 3.05,
            elevation: 4 * themeFactor
        }

    if (variant === 'high')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 4 * sign * themeFactor,
            },
            shadowOpacity: 0.19 * themeFactor,
            shadowRadius: 5.62,
            elevation: 6 * themeFactor
        }
}
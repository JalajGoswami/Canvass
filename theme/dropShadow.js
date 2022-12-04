export function dropShadow(variant = 'low', color) {

    if (variant === 'none' || !color)
        return {}

    if (variant === 'low')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 2
        }

    if (variant === 'medium')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4
        }

    if (variant === 'high')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6
        }
}
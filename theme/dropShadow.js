export function dropShadow(variant = 'low', color, direction = 'down') {
    let sign = direction == 'up' ? -1 : (direction == 'center' ? 0 : 1)

    if (variant === 'none' || !color)
        return {}

    if (variant === 'low')
        return {
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 1 * sign,
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
                height: 3 * sign,
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
                height: 4 * sign,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6
        }
}
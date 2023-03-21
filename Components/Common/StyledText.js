import { Text } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { BodyFont, DisplayFont } from 'theme/theme'

export default function StyledText({
    children, variant = 'content', size = 10,
    color = 'onBackground', style, ...props
}) {
    const theme = useTheme()

    const getStyles = () => {
        let defaultStyle = [{
            color: theme.colors[color],
            fontSize: 14 * size / 10
        }]
        if (variant === 'content')
            defaultStyle.push({ fontFamily: BodyFont })

        if (variant === 'content-bold')
            defaultStyle.push({ fontFamily: BodyFont, fontWeight: 'bold' })

        if (variant === 'title')
            defaultStyle.push({ fontFamily: DisplayFont, fontSize: 20 * size / 10 })

        if (variant === 'title-bold')
            defaultStyle.push({
                fontFamily: DisplayFont,
                fontSize: 20 * size / 10,
                fontWeight: 'bold'
            })

        Array.isArray(style) ? defaultStyle.push(...style)
            : defaultStyle.push(style)

        return defaultStyle
    }

    return (
        <Text
            style={getStyles()}
            {...props}
        >
            {children}
        </Text>
    )
}
import { Text } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

export default function Text({ children, variant = 'content', style, ...props }) {
    const theme = useTheme()

    const getStyles = () => {
        let defaultStyle = [{
            color: theme.colors.onBackground,
            fontSize: 14
        }]
        if (variant === 'content')
            defaultStyle.push({ fontFamily: 'Inter' })

        if (variant === 'content-bold')
            defaultStyle.push({ fontFamily: 'Inter', fontWeight: 'bold' })

        if (variant === 'title')
            defaultStyle.push({ fontFamily: 'Montserrat', fontSize: 20 })

        if (variant === 'title')
            defaultStyle.push({
                fontFamily: 'Montserrat',
                fontSize: 20,
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
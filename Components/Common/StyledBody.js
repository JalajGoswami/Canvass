import React from 'react'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function StyledBody({ children, variant = 'neutral', style, ...props }) {
    const theme = useTheme()

    const getStyles = () => {
        console.log(theme.colors.background)
        let defaultStyle = [{
            flex: 1
        }]
        if (variant === 'neutral')
            defaultStyle.push({ backgroundColor: theme.colors.background })

        if (variant === 'surface')
            defaultStyle.push({ backgroundColor: theme.colors.surfaceVariant })

        Array.isArray(style) ? defaultStyle.push(...style)
            : defaultStyle.push(style)
        
        return defaultStyle
    }

    return (
        <SafeAreaView
            style={getStyles()}
            {...props}
        >
            {children}
        </SafeAreaView>
    )
}
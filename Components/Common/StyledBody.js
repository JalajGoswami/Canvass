import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function StyledBody({ children, variant = 'neutral', style, ...props }) {
    const theme = useTheme()
    const getStyles = () => {
        let defaultStyle = {
            flex: 1
        }
        if (variant === 'neutral')
            defaultStyle = { ...defaultStyle, backgroundColor: theme.colors.background }

        if (variant === 'surface')
            defaultStyle = { ...defaultStyle, backgroundColor: theme.colors.surfaceVariant }

        return defaultStyle
    }
    const styles = StyleSheet.create({ defaultStyle: getStyles() })

    const getUserStyles = () => (
        Array.isArray(style) ? style : [style]
    )
console.log([styles.defaultStyle, ...getUserStyles()])
    return (
        <SafeAreaView
            style={[styles.defaultStyle, ...getUserStyles()]}
            {...props}
        >
            {children}
        </SafeAreaView>
    )
}

import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function StyledBody({ children, variant = 'neutral', style, ...props }) {
    const theme = useTheme()
    const BgColors = {
        neutral: theme.colors.background ,
        surface: theme.colors.surface,
        surfaceVariant: theme.colors.surfaceVariant,
        primary: theme.colors.onPrimary,
        secondary: theme.colors.onSecondary,
        tertiary: theme.colors.onTertiary,
        error: theme.colors.onError,
    }
    const styles = StyleSheet.create({ 
        defaultStyle: {
            flex: 1,
            backgroundColor: BgColors[variant]
        } 
    })

    const getUserStyles = () => (
        Array.isArray(style) ? style : [style]
    )

    return (
        <SafeAreaView
            style={[styles.defaultStyle, ...getUserStyles()]}
            {...props}
        >
            {children}
        </SafeAreaView>
    )
}

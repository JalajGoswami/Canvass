import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { dropShadow } from '../../theme/dropShadow'

export default function StyledBody({
    children, variant = 'neutral',
    shadow = 'none', shadowColor,
    style, ...props
}) {
    const theme = useTheme()
    const BgColors = {
        neutral: theme.colors.background,
        surface: theme.colors.surface,
        surfaceVariant: theme.colors.surfaceVariant,
        primary: theme.colors.primaryContainer,
        secondary: theme.colors.secondaryContainer,
        tertiary: theme.colors.tertiaryContainer,
        error: theme.colors.errorContainer,
        primaryContrast: theme.colors.onPrimary,
        secondaryContrast: theme.colors.onSecondary,
        tertiaryContrast: theme.colors.onTertiary,
        errorContrast: theme.colors.onError,
    }
    const styles = StyleSheet.create({
        defaultStyle: {
            backgroundColor: BgColors[variant],
            ...dropShadow(shadow, shadowColor || theme.colors.onBackground)
        }
    })

    const getUserStyles = () => (
        Array.isArray(style) ? style : [style]
    )

    return (
        <View
            style={[styles.defaultStyle, ...getUserStyles()]}
            {...props}
        >
            {children}
        </View>
    )
}

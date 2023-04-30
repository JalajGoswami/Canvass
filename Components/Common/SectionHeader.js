import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'

export default function SectionHeader({
    title, style = {}, size = 10
}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        titleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        line: {
            backgroundColor: theme.colors.surfaceVariant,
            height: 0.75,
            flexGrow: 1,
            transform: [{ translateY: 1 }]
        },
        title: {
            paddingHorizontal: 8,
        }
    })

    return (
        <View style={[styles.titleContainer, style]}>
            <View style={styles.line} />
            <StyledText style={styles.title}
                color='outline'
                size={size}
            >
                {title}
            </StyledText>
            <View style={styles.line} />
        </View>
    )
}
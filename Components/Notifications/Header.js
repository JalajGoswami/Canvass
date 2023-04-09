import { StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'

export default function Header() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderBottomColor: theme.colors.surfaceVariant,
            borderBottomWidth: 0.5,
        }
    })

    return (
        <View style={styles.container}>
            <StyledText
                variant='title-bold' size={14}
                color='onPrimaryContainer'
            >
                Notifications
            </StyledText>
        </View>
    )
}
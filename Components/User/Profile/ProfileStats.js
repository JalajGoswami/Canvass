import { View, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'
import dropShadow from 'theme/dropShadow'

export default function ProfileStats() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            marginVertical: 20,
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',
        },
        section: {
            alignItems: 'center',
            width: 100,
        },
        seprator: {
            backgroundColor: theme.colors.outline,
            width: 0.5,
        },
        border: {
            backgroundColor: theme.colors.surfaceVariant,
            height: 0.5,
            marginBottom: 8,
            ...dropShadow('low', theme.colors.surfaceVariant)
        }
    })

    function Stat({ count, label, onPress = () => null }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.section}
                onPress={onPress}
            >
                <StyledText variant='title-bold'>
                    {count}
                </StyledText>
                <StyledText
                    variant='title' size={8}
                    color='onSurfaceVariant'
                >
                    {label}
                </StyledText>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Stat
                    count='1.2M'
                    label='Followers'
                />
                <View style={styles.seprator} />
                <Stat
                    count='300K'
                    label='Following'
                />
                <View style={styles.seprator} />
                <Stat
                    count='200'
                    label='Posts'
                />
            </View>
            <View style={styles.border} />
        </>
    )
}
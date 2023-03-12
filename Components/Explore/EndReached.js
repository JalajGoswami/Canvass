import { StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from '../Common/StyledText'
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableRipple, useTheme } from 'react-native-paper'

export default function EndReached({ gotoTop }) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 2,
            marginBottom: 16,
        },
        icon: {
            paddingHorizontal: 8,
            borderRadius: 20,
        }
    })
    return (
        <View style={styles.container}>
            <TouchableRipple
                borderless
                rippleColor={theme.colors.secondary + '22'}
                style={styles.icon}
                onPress={gotoTop}
            >
                <Entypo name='chevron-small-up' size={30}
                    color={theme.colors.onBackground}
                />
            </TouchableRipple>
            <StyledText variant='title'>
                You've reached the end..😼
            </StyledText>
            <StyledText size={8}>
                Click on icon to Explore something New
            </StyledText>
        </View>
    )
}
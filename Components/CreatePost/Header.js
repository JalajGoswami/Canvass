import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'

export default function Header() {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            paddingHorizontal: 3
        },
        userImg: {
            width: 32,
            height: 32,
            borderRadius: 16,
            marginHorizontal: 12,
        },
    })
    return (
        <View style={styles.container}>
            <Image
                source={require('assets/images/profile.png')}
                style={styles.userImg} resizeMode='cover'
            />
            <StyledText variant='title'>
                Jalaj Goswami
            </StyledText>
        </View>
    )
}
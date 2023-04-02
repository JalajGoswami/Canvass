import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'


export default function TitleBar({ user, compact }) {

    const styles = StyleSheet.create({
        titleBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        likesCount: {
            flexDirection: 'row',
            marginRight: 'auto',
            marginLeft: compact ? 10 : 5,
        },
        count: {
            marginHorizontal: 2,
        },
        userImg: {
            width: 24,
            height: 24,
            borderRadius: 12,
            marginLeft: 8,
            marginRight: 12,
            marginTop: 8,
            marginBottom: compact ? 5 : 8
        },
    })


    return (
        <View style={styles.titleBar}>
            <View style={styles.likesCount}>
                <StyledText size={7}
                    style={styles.count} color='onSurfaceVariant'
                >
                    10 Likes
                </StyledText>
                <StyledText size={7}
                    style={styles.count} color='onSurfaceVariant'
                >
                    8 Dislikes
                </StyledText>
            </View>
            <StyledText>{user}</StyledText>
            <Image
                source={require('assets/images/profile.png')}
                style={styles.userImg} resizeMode='cover'
            />
        </View>
    )
}
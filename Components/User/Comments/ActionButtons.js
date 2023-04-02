import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

export default function ActionButtons({ compact }) {
    const theme = useTheme()
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const border = compact ?
        {
            borderTopWidth: 0.5,
            borderTopColor: theme.colors.surfaceVariant
        }
        : {
            borderRightWidth: 0.5,
            borderRightColor: theme.colors.surfaceVariant
        }


    const styles = StyleSheet.create({
        actions: {
            flexDirection: compact ? 'row' : 'column',
            alignItems: 'center',
            paddingHorizontal: compact ? 8 : 6,
            paddingVertical: compact ? 1 : 0,
            marginTop: compact ? 0 : 2,
            ...border,
        },
        actionBtn: {
            marginHorizontal: compact ? 0.5 : 0,
            marginVertical: 0,
            padding: 6,
            borderRadius: 15,
        },
    })

    function ActionBtn({
        children, rippleColor, onPress = () => null
    }) {
        return (
            <TouchableRipple borderless
                rippleColor={rippleColor || theme.colors.primary + '22'}
                style={styles.actionBtn}
                onPress={onPress}

            >
                {children}
            </TouchableRipple>
        )
    }

    return (
        <View style={styles.actions}>
            <ActionBtn
                rippleColor={theme.colors.secondary + '33'}
                onPress={() => setLiked(!liked)}
            >
                <AntDesign
                    name={liked ? 'like1' : 'like2'}
                    size={18}
                    color={theme.colors[liked ? 'secondary' : 'primary']}
                />
            </ActionBtn>
            <ActionBtn
                rippleColor={theme.colors.tertiary + '33'}
                onPress={() => setDisliked(!disliked)}
            >
                <AntDesign
                    name={disliked ? 'dislike1' : 'dislike2'}
                    size={18}
                    color={theme.colors[disliked ? 'tertiary' : 'primary']}
                />
            </ActionBtn>
            <ActionBtn>
                <Octicons
                    name='reply' size={18}
                    color={theme.colors.primary}
                />
            </ActionBtn>
        </View>
    )
}
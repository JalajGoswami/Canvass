import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

export default function ActionButtons({ compact }) {
    const theme = useTheme()

    const styles = StyleSheet.create({
        actions: {
            flexDirection: compact ? 'row' : 'column',
            alignItems: 'center',
            marginRight: 4,
            marginLeft: compact ? 6 : 0,
        },
        actionBtn: {
            marginHorizontal: 0,
            marginVertical: 0,
            padding: 6,
            borderRadius: 15,
        },
    })

    function ActionBtn({ children, onPress = () => null }) {
        return (
            <TouchableRipple borderless
                rippleColor={theme.colors.primary + '22'}
                style={styles.actionBtn}
                onPress={onPress}
            >
                {children}
            </TouchableRipple>
        )
    }

    const fontFactor = compact ? 1.1 : 1

    return (
        <View style={styles.actions}>
            <ActionBtn>
                <AntDesign
                    name='like2' size={18 * fontFactor}
                    color={theme.colors.primary}
                />
            </ActionBtn>
            <ActionBtn>
                <AntDesign
                    name='dislike2' size={18 * fontFactor}
                    color={theme.colors.primary}
                />
            </ActionBtn>
            <ActionBtn>
                <MaterialCommunityIcons
                    name='comment-outline' size={17.5 * fontFactor}
                    color={theme.colors.primary}
                />
            </ActionBtn>
            <ActionBtn>
                <MaterialIcons
                    name='save-alt' size={18.5 * fontFactor}
                    color={theme.colors.primary}
                />
            </ActionBtn>
            <ActionBtn>
                <Feather
                    name='share' size={17.5 * fontFactor}
                    color={theme.colors.primary}
                />
            </ActionBtn>
        </View>
    )
}
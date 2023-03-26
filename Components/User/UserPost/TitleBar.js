import { Image, StyleSheet, View } from 'react-native'
import { IconButton, Menu, TouchableRipple, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import StyledText from 'Components/Common/StyledText'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TitleBar({ user }) {
    const theme = useTheme()
    const [options, setOptions] = useState(false)

    const styles = StyleSheet.create({
        titleBar: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: theme.colors.surface,
            borderBottomWidth: 0.5,
        },
        userImg: {
            width: 28,
            height: 28,
            borderRadius: 14,
            marginHorizontal: 8,
        },
        optionsContainer: {
            marginLeft: 'auto',
        },
        optionsBtn: {
            marginVertical: 0,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        menuItemIcon: {
            width: 40,
            height: 36,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        menuItemTxt: {
            color: theme.colors.onSurfaceVariant,
            paddingRight: 12,
        },
    })

    function MenuItem({
        IconComponent, icon, title, onPress = () => null
    }) {
        return (
            <TouchableRipple borderless
                rippleColor={theme.colors.primary + '22'}
                style={styles.menuItem}
                onPress={onPress}
            >
                <>
                    <IconComponent
                        color={theme.colors.onSurfaceVariant}
                        name={icon} size={20}
                        style={styles.menuItemIcon}
                    />
                    <StyledText style={styles.menuItemTxt}>
                        {title}
                    </StyledText>
                </>
            </TouchableRipple>
        )
    }

    return (
        <View style={styles.titleBar}>
            <Image
                source={require('assets/images/profile.png')}
                style={styles.userImg} resizeMode='cover'
            />
            <StyledText>{user}</StyledText>
            <View style={styles.optionsContainer}>
                <Menu
                    visible={options}
                    onDismiss={() => setOptions(false)}
                    anchorPosition='bottom'
                    anchor={
                        <IconButton icon='dots-vertical'
                            style={styles.optionsBtn}
                            size={18} onPress={() => setOptions(true)}
                        />
                    }
                >
                    <MenuItem
                        IconComponent={MaterialCommunityIcons}
                        icon='eye-off-outline'
                        title='Hide for me'
                    />
                    <MenuItem
                        IconComponent={MaterialCommunityIcons}
                        icon='account-remove'
                        title='Unfollow'
                    />
                    <MenuItem
                        IconComponent={MaterialIcons}
                        icon='report'
                        title='Report'
                    />
                </Menu>
            </View>
        </View>
    )
}
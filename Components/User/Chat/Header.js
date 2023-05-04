import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { useRoute } from '@react-navigation/native'
import StyledText from 'Components/Common/StyledText'
import { Menu, TouchableRipple, useTheme } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MenuItem from 'Components/Common/MenuItem'

export default function Header() {
    const theme = useTheme()
    const [showOpts, setShowOpts] = useState(false)
    const { params } = useRoute()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderBottomColor: theme.colors.surfaceVariant,
            borderBottomWidth: 0.5
        },
        img: {
            width: 38,
            height: 38,
            borderRadius: 20,
            marginRight: 11
        },
        usrName: {
            flexGrow: 1,
            flexShrink: 1,
        },
        optionsBtn: {
            width: 32,
            height: 32,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.container}>
            <SharedElement id={`chat.${params.id}.usrImg`}>
                <Image
                    style={styles.img}
                    source={require('assets/images/profile.png')}
                />
            </SharedElement>
            <StyledText
                style={styles.usrName}
                variant='title-bold' size={9}
                numberOfLines={1} ellipsizeMode='tail'
            >
                User name
            </StyledText>
            <Menu
                visible={showOpts}
                onDismiss={() => setShowOpts(false)}
                anchorPosition='bottom'
                anchor={
                    <TouchableRipple borderless
                        style={styles.optionsBtn}
                        rippleColor={theme.colors.primary + '44'}
                        onPress={() => setShowOpts(true)}
                    >
                        <Feather
                            name='more-vertical' size={22}
                            color={theme.colors.onBackground}
                        />
                    </TouchableRipple>
                }
            >
                <MenuItem
                    IconComponent={MaterialIcons}
                    icon='search'
                    title='Search'
                    compact={false}
                />
                <MenuItem
                    IconComponent={MaterialIcons}
                    icon='delete-forever'
                    title='Delete Chat'
                    compact={false}
                />
                <MenuItem
                    IconComponent={Octicons}
                    icon='blocked' iconSize={18}
                    title='Block User'
                    compact={false}
                />
            </Menu>
        </View>
    )
}
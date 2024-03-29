import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import StyledText from 'Components/Common/StyledText'
import { SvgUri } from 'react-native-svg'
import { TouchableRipple, Menu } from 'react-native-paper'
import MenuItem from 'Components/Common/MenuItem'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { SharedElement } from 'react-navigation-shared-element'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    { name: 'User', lastMsg: 'how you doing', active: false },
    { name: 'Very Very Long User Name', lastMsg: 'what is your plan for tomorrow', active: true },
    { name: 'Normal Username', lastMsg: 'how you doing', active: true },
]
export default function Chats() {
    const styles = StyleSheet.create({
        container: {
            marginTop: 8,
            paddingBottom: 65
        }
    })
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={new Array(4).fill(DATA).flat()} keyExtractor={(_, i) => i.toString()}
            renderItem={({ item, index }) => <Chat id={index} {...item} />}
        />
    )
}

function Chat({ id, name, lastMsg, active }) {
    const [showOptions, setShowOptions] = useState(false)
    const { navigate } = useNavigation()
    const styles = StyleSheet.create({
        container: {
            paddingVertical: 12,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden'
        },
        img: {
            width: 45,
            height: 45,
            borderRadius: 25,
            marginRight: 10,
        },
        txt: {
            flexShrink: 1,
            flexGrow: 1
        },
        activeIcon: {
            width: 20,
            height: 20,
            flexShrink: 0,
            marginLeft: 5,
        },
        optionsBtn: {
            opacity: 0,
        },
    })

    return (
        <TouchableRipple
            style={styles.container}
            onPress={() => navigate('Chats/Chat', { id })}
            onLongPress={() => setShowOptions(true)}
        >
            <>
                <SharedElement id={`chat.${id}.usrImg`}>
                    <Image
                        source={require('assets/images/profile.png')}
                        style={styles.img}
                    />
                </SharedElement>
                <View style={styles.txt}>
                    <StyledText
                        numberOfLines={1} ellipsizeMode='tail'
                        variant='content-bold'
                    >
                        {name}
                    </StyledText>
                    <StyledText
                        numberOfLines={1} ellipsizeMode='tail'
                        color='outline' size={9}
                    >
                        {lastMsg}
                    </StyledText>
                </View>
                <Menu
                    visible={showOptions}
                    onDismiss={() => setShowOptions(false)}
                    anchorPosition='bottom'
                    anchor={
                        <StyledText style={styles.optionsBtn}>.</StyledText>
                    }
                >
                    <MenuItem
                        IconComponent={MaterialIcons}
                        icon='delete-forever'
                        title='Delete Chat'
                    />
                    <MenuItem
                        IconComponent={Octicons}
                        icon='mute'
                        title='Mute Messages'
                    />
                </Menu>
                {active &&
                    <Image
                        source={require('assets/images/voltage.webp')}
                        style={styles.activeIcon}
                    />
                }
            </>
        </TouchableRipple>
    )
}
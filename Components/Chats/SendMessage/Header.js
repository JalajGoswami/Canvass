import { Dimensions, StyleSheet, View, TextInput as NativeTextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import StyledText from 'Components/Common/StyledText'
import { IconButton, TextInput, TouchableRipple, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TokenizedText from 'Components/Common/TokenizedText'
import { BodyFont } from 'theme/theme'

export default function Header() {
    const theme = useTheme()
    const { goBack } = useNavigation()
    const inputRef = useRef()
    const [searchStr, setSearchStr] = useState()
    const [msg, setMsg] = useState()

    const styles = StyleSheet.create({
        titleBar: {
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
        backBtn: {
            width: 32,
            height: 32,
            marginVertical: 0,
            marginLeft: 0,
            marginRight: 10
        },
        srchInp: {
            marginHorizontal: 10,
            fontSize: 14,
            marginTop: 5
        },
        msgInpContainer: {
            flexDirection: 'row',
            paddingHorizontal: 6,
            borderWidth: 1,
            borderColor: theme.colors.outline,
            borderRadius: 20,
            marginHorizontal: 10,
            marginTop: 10
        },
        msgInp: {
            flexGrow: 1,
            fontFamily: BodyFont,
            marginLeft: 2,
            color: theme.colors.onBackground,
            maxWidth: Dimensions.get('window').width - 76,
            maxHeight: 106,
        },
        postBtn: {
            justifyContent: 'center',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 50,
        },
        btnIcon: {
            transform: [{ translateX: -1.5 }]
        }
    })

    return (
        <>
            <View style={styles.titleBar}>
                <IconButton
                    icon='keyboard-backspace'
                    onPress={goBack}
                    style={styles.backBtn} size={28}
                    iconColor={theme.colors.onPrimaryContainer}
                />
                <StyledText
                    variant='title-bold'
                    color='onPrimaryContainer'
                    size={11}
                >
                    Send Message
                </StyledText>
            </View>
            <View style={styles.msgInpContainer}>
                <NativeTextInput
                    style={styles.msgInp}
                    placeholder='Type message here..'
                    underlineStyle={{ height: 0 }}
                    selectionColor={theme.colors.secondary + '44'}
                    autoCorrect={false} multiline
                    onChangeText={setMsg}
                    // onFocus={e => e.target.setNativeProps({borderColor: theme.colors.primary})}
                >
                    <TokenizedText>{msg}</TokenizedText>
                </NativeTextInput>
                <TouchableRipple
                    onPress={() => null}
                    style={styles.postBtn} borderless
                    rippleColor={theme.colors.secondary + '22'}
                >
                    <FontAwesome name='send-o'
                        size={22} color={theme.colors.secondary}
                        style={styles.btnIcon}
                    />
                </TouchableRipple>
            </View>
            <TextInput
                ref={inputRef}
                mode='outlined' dense
                style={styles.srchInp}
                returnKeyType='search'
                right={
                    <TextInput.Icon
                        icon={searchStr ? 'close' : 'magnify'}
                        rippleColor='#00000000' animated
                        size={22}
                        onPress={() => {
                            inputRef.current?.clear()
                            setSearchStr('')
                        }}
                    />
                }
                outlineStyle={{ borderRadius: 16 }}
                outlineColor={theme.colors.outline + '99'}
                activeOutlineColor={theme.colors.secondary}
                selectionColor={theme.colors.secondaryContainer}
                spellCheck={false}
                placeholderTextColor={theme.colors.outline + 'aa'}
                placeholder='Search anyone'
                onChangeText={setSearchStr}
            />
        </>
    )
}
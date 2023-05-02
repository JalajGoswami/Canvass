import { StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import StyledText from 'Components/Common/StyledText'
import { Button, TextInput, useTheme } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header() {
    const theme = useTheme()
    const inputRef = useRef()
    const [searchStr, setSearchStr] = useState()
    const styles = StyleSheet.create({
        titleBar: {
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        newMsgBtn: {
            minWidth: 20
        },
        input: {
            marginHorizontal: 15,
            fontSize: 14,
            marginTop: 5,
        }
    })

    return (
        <>
            <View style={styles.titleBar}>
                <StyledText
                    variant='title-bold'
                    color='onPrimaryContainer'
                    size={12}
                >
                    Messages
                </StyledText>
                <Button
                    rippleColor={theme.colors.primary}
                    onPress={() => null}
                    style={styles.newMsgBtn}
                >
                    <Entypo
                        name='new-message' size={20}
                        color={theme.colors.onPrimaryContainer}
                    />
                </Button>
            </View>
            <TextInput
                ref={inputRef}
                mode='outlined' dense
                style={styles.input}
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
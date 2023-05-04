import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import StyledText from 'Components/Common/StyledText'
import { Checkbox, useTheme } from 'react-native-paper'

export default function SelectUsers() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            paddingBottom: 20
        },
        userRow: {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 15,
            alignItems: 'center',
        },
        img: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 15
        },
        usrName: {
            flexGrow: 1,
            flexShrink: 1,
        }
    })

    function User() {
        const [checked, setChecked] = useState(false)
        return (
            <View style={styles.userRow}>
                <Image
                    style={styles.img}
                    source={require('assets/images/profile.png')}
                />
                <StyledText
                    style={styles.usrName}
                    variant='content-bold' size={11}
                    numberOfLines={1} ellipsizeMode='tail'
                >
                    User name
                </StyledText>
                <Checkbox
                    onPress={() => setChecked(c => !c)}
                    status={checked ? 'checked' : 'unchecked'}
                    color={theme.colors.secondary}
                    uncheckedColor={theme.colors.onSecondaryContainer}
                />
            </View>
        )
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={new Array(15)}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) =>
                <User />
            }
        />
    )
}
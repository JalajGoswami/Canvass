import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import dropShadow from 'theme/dropShadow'
import DocumentPicker from 'react-native-document-picker'

export default function ProfilePic() {
    const theme = useTheme()
    const [imgFile, setImgFile] = useState()

    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            alignSelf: 'center',
        },
        img: {
            width: 160,
            height: 160,
            borderRadius: 80,
        },
        editBtn: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.onTertiary,
            ...dropShadow('low', theme.colors.onTertiaryContainer)
        }
    })

    const handleFileSelect = () => {
        DocumentPicker.pickSingle({ type: 'image/*' })
            .then(setImgFile)
            .catch(err => null)
    }

    return (
        <View style={styles.container}>
            <Image
                source={
                    imgFile ? { uri: imgFile.uri } :
                        require('assets/images/profile.png')
                }
                style={styles.img}
            />
            <TouchableRipple
                rippleColor={theme.colors.tertiary + '55'}
                style={styles.editBtn}
                onPress={handleFileSelect}
                borderless
            >
                <Entypo
                    name='pencil' size={30}
                    color={theme.colors.tertiary}
                    style={{ transform: [{ translateX: 1 }] }}
                />
            </TouchableRipple>
        </View>
    )
}
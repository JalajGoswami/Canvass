import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import dropShadow from 'theme/dropShadow'
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

export default function ProfilePic({ editing = false }) {
    const theme = useTheme()
    const [imgFile, setImgFile] = useState()
    const { navigate } = useNavigation()

    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            alignSelf: 'center',
        },
        img: {
            width: editing ? 100 : 160,
            height: editing ? 100 : 160,
            borderRadius: 80,
        },
        editBtn: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: 20,
            width: editing ? 30 : 40,
            height: editing ? 30 : 40,
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
            <SharedElement id='profile-pic'>
                <Image
                    source={
                        imgFile ? { uri: imgFile.uri } :
                            require('assets/images/profile.png')
                    }
                    style={styles.img}
                />
            </SharedElement>
            <SharedElement id='profile-edit-btn'>
                <TouchableRipple
                    rippleColor={theme.colors.tertiary + '55'}
                    style={styles.editBtn}
                    onPress={
                        editing ? handleFileSelect
                            : () => navigate('Profile/Edit')
                    }
                    borderless
                >
                    <Entypo
                        name='pencil' size={editing ? 22 : 30}
                        color={theme.colors.tertiary}
                        style={{ transform: [{ translateX: 1 }] }}
                    />
                </TouchableRipple>
            </SharedElement>
        </View>
    )
}
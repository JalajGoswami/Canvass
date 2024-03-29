import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import dropShadow from 'theme/dropShadow'
import ImageCropPicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { UserAvatar, getImageFile } from 'utils/helper'
import { useSelector } from 'react-redux'

export default function ProfilePic({
    editing = false, imgFile, setImgFile
}) {
    const theme = useTheme()
    const { navigate } = useNavigation()
    const { user } = useSelector(state => state.user)

    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            alignSelf: 'center',
        },
        settingBtn: {
            position: 'absolute',
            right: 15,
            top: 10,
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
        ImageCropPicker.openPicker({
            cropping: true,
            width: 500,
            height: 500,
            compressImageQuality: 0.9,
            enableRotationGesture: false,
            cropperCircleOverlay: true,
            cropperToolbarColor: theme.colors.background,
            cropperActiveWidgetColor: theme.colors.tertiary,
            cropperToolbarWidgetColor: theme.colors.primary,
            cropperStatusBarColor: theme.colors.outline,
        })
            .then(res => setImgFile(getImageFile(res)))
            .catch(err => null)
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.7}
                style={styles.settingBtn}
                onPress={() => navigate('Profile/Actions')}
            >
                <Ionicons name='settings-sharp'
                    size={20} color={theme.colors.outline}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <SharedElement id='profile-pic'>
                    <Image
                        source={
                            imgFile ? { uri: imgFile.uri } :
                                user?.profile_pic ?
                                    { uri: user.profile_pic }
                                    : UserAvatar
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
        </View>
    )
}
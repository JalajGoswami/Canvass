import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import StyledText from 'Components/Common/StyledText'
import ImageCropPicker from 'react-native-image-crop-picker'
import { getImageFile } from 'utils/helper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ImageSelector({ imgFile, setImgFile }) {
    const theme = useTheme()
    const aspect_ratio = imgFile?.aspect_ratio > 0.75
        ? imgFile.aspect_ratio : 0.75

    const styles = StyleSheet.create({
        addPhoto: {
            borderColor: theme.colors.outline,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: 5,
            alignItems: 'center',
            padding: 10,
            marginHorizontal: 15,
        },
        imageWrapper: {
            width: 200,
            alignSelf: 'center',
            borderWidth: 0.5,
            borderColor: theme.colors.outline
        },
        image: {
            width: 200,
            height: imgFile ?
                200 / aspect_ratio
                : 200,
            resizeMode: 'contain',
        },
        imgBtns: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        imgBtnIcon: {
            backgroundColor: theme.colors.background + '99',
            width: 32,
            height: 32,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 2,
        },
    })

    const handleFileSelect = () => {
        ImageCropPicker.openPicker({
            cropping: true,
            freeStyleCropEnabled: true,
            enableRotationGesture: false,
            cropperToolbarColor: theme.colors.background,
            cropperActiveWidgetColor: theme.colors.tertiary,
            cropperToolbarWidgetColor: theme.colors.primary,
            cropperStatusBarColor: theme.colors.outline,
            compressImageMaxHeight: 1000,
            compressImageMaxWidth: 1000,
            compressImageQuality: 0.85
        })
            .then(res => setImgFile(getImageFile(res)))
            .catch(err => null)
    }

    return (
        imgFile ?
            <View style={styles.imageWrapper}>
                <Image
                    source={imgFile}
                    style={styles.image}
                />
                <View style={styles.imgBtns}>
                    <TouchableRipple
                        onPress={handleFileSelect}
                        style={styles.imgBtnIcon}
                    >
                        <MaterialCommunityIcons
                            name='image-edit' size={23.5}
                            color={theme.colors.tertiary}
                        />
                    </TouchableRipple>
                    <TouchableRipple
                        onPress={() => setImgFile(null)}
                        style={styles.imgBtnIcon}
                    >
                        <MaterialCommunityIcons
                            name='file-image-remove' size={23}
                            color={theme.colors.tertiary}
                        />
                    </TouchableRipple>
                </View>
            </View>
            :
            <TouchableRipple
                style={styles.addPhoto}
                onPress={handleFileSelect}
            >
                <StyledText color='outline'>
                    Add a Photo
                </StyledText>
            </TouchableRipple>

    )
}
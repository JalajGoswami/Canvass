import { Image, StyleSheet, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import React, { useMemo } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import StyledText from 'Components/Common/StyledText'
import { getImageFile } from 'utils/helper'


export default function ProfileImage({ imgFile, setImgFile }) {
    const theme = useTheme()
    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 15,
        },
        image: {
            width: 120,
            height: 120,
            borderRadius: 60,
        },
        txt: {
            marginTop: 10,
            textAlign: 'center',
            color: theme.colors.onSurface
        }
    }), [theme])

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
        <View style={styles.container}>
            <TouchableRipple onPress={handleFileSelect}
                onLongPress={() => setImgFile(null)}
                borderless style={styles.image}
                rippleColor={theme.colors.primaryContainer}
            >
                <Image style={styles.image}
                    source={
                        imgFile ? { uri: imgFile.uri } :
                            require('assets/images/profile.png')
                    }
                />
            </TouchableRipple>
            <StyledText size={6} style={styles.txt}>
                {imgFile ? 'Long Press to Unselect' : 'Tap Avatar to Pick'}
            </StyledText>
        </View>
    )
}
import { Image, StyleSheet, View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import React, { useMemo, useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import StyledText from '../Common/StyledText'


export default function ProfileImage() {
    const theme = useTheme()
    const [imgFile, setImgFile] = useState()
    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 50,
        },
        image: {
            width: 80,
            height: 80,
            borderRadius: 40,
        },
        txt: {
            marginTop: 10,
            textAlign: 'center',
            color: theme.colors.onSurface
        }
    }))
    const handleFileSelect = () => {
        DocumentPicker.pickSingle({ type: 'image/*' })
            .then(setImgFile)
            .catch()
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
                            require('../../assets/images/profile.png')
                    }
                />
            </TouchableRipple>
            <StyledText size={6} style={styles.txt}>
                {imgFile ? 'Long Press to Unselect' : 'Tap Avatar to Pick'}
            </StyledText>
        </View>
    )
}
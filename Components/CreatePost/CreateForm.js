import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput, TouchableRipple, useTheme } from 'react-native-paper'
import StyledText from 'Components/Common/StyledText'
import DocumentPicker from 'react-native-document-picker'
import TagsInput from './TagsInput'

export default function CreateForm() {
    const theme = useTheme()
    const [imgFile, setImgFile] = useState()
    const contentWidth = Dimensions.get('screen').width - 30
    const aspect_ratio = imgFile?.aspect_ratio > 0.75
        ? imgFile.aspect_ratio : 0.75

    const styles = StyleSheet.create({
        input: {
            marginBottom: 5,
            maxHeight: 150
        },
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
        submtBtn: {
            marginHorizontal: 15,
            borderRadius: 5,
            marginTop: 15,
        }
    })

    const handleFileSelect = () => {
        DocumentPicker.pickSingle({ type: 'image/*' })
            .then(file =>
                Image.getSize(file.uri, (w, h) => {
                    setImgFile({ ...file, aspect_ratio: w / h })
                })
            )
            .catch(err => null)
    }

    return (
        <View>
            <TextInput
                placeholder='Write something splendid of your own'
                style={styles.input}
                multiline mode='outlined'
                numberOfLines={5}
                selectionColor={theme.colors.tertiary + '66'}
                placeholderTextColor={theme.colors.outline}
                outlineColor='transparent'
                activeOutlineColor='transparent'
            />
            {imgFile ?
                <View style={styles.imageWrapper}>
                    <Image
                        source={imgFile}
                        style={styles.image}
                    />
                    <View style={styles.imgBtns}>
                        <TouchableRipple onPress={handleFileSelect}>
                            <StyledText>Chng</StyledText>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => setImgFile(null)}>
                            <StyledText>Rmv</StyledText>
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
            }
            <TagsInput />
            <Button
                onPress={() => null}
                buttonColor={theme.colors.secondary}
                textColor={theme.colors.onSecondary}
                style={styles.submtBtn}
            >
                Share this Post
            </Button>
        </View>
    )
}
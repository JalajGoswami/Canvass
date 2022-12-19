import React, { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { SharedElement } from 'react-navigation-shared-element'
import StyledBody from '../../../Components/Common/StyledBody'
import StyledText from '../../../Components/Common/StyledText'
import { DisplayFont } from '../../../theme/theme'

export default function Verify() {
    const theme = useTheme()
    const styles = useMemo(() => StyleSheet.create({
        title: {
            marginHorizontal: 25,
            marginVertical: 20,
            textAlign: 'center',
            color: theme.colors.primary,
        },
        image: {
            width: 300,
            height: 300,
            alignSelf: 'center'
        },
        formWrapper: {
            flexGrow: 1,
            justifyContent: 'flex-end',
            marginBottom: 50,
        },
        input: {
            height: 65,
            marginHorizontal: 25,
            marginBottom: 15,
        },
        btn: {
            marginHorizontal: 25,
            borderRadius: 4,
        },
        btnTxt: {
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: DisplayFont,
        }
    }))
    return (
        <StyledBody variant='neutral'>

            <Image source={require('../../../assets/images/connect.png')}
                resizeMode='contain' style={styles.image} />
            <SharedElement id='title'>
                <StyledText variant='title-bold' size={15}
                    style={styles.title}
                >
                    Verify your Email by Verification Code
                </StyledText>
            </SharedElement>
            <View style={styles.formWrapper}>
                <TextInput
                    label='Verification Code'
                    keyboardType='numeric'
                    style={styles.input}
                />
                <SharedElement id='proceed_btn'>
                    <Button
                        mode='contained' contentStyle={{ paddingVertical: 5 }}
                        style={styles.btn}
                        labelStyle={styles.btnTxt}
                    >
                        Proceed
                    </Button>
                </SharedElement>
            </View>
        </StyledBody>
    )
}
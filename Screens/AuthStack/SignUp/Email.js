import React, { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { SharedElement } from 'react-navigation-shared-element'
import StyledBody from 'Components/Common/StyledBody'
import StyledText from 'Components/Common/StyledText'
import { DisplayFont } from 'theme/theme'

export default function Email({ navigation }) {
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
            <Image source={require('assets/images/social.png')}
                resizeMode='contain' style={styles.image} />
            <SharedElement id='title'>
                <StyledText variant='title-bold' size={16}
                    style={styles.title}
                >
                    Create new Account for Free !
                </StyledText>
            </SharedElement>
            <View style={styles.formWrapper}>
                <TextInput
                    label='Email Address'
                    keyboardType='email-address'
                    style={styles.input}
                />
                <SharedElement id='proceed_btn'>
                    <Button
                        mode='contained'
                        style={styles.btn} contentStyle={{ paddingVertical: 5 }}
                        labelStyle={styles.btnTxt}
                        onPress={() => navigation.navigate('SignUp/Verify')}
                    >
                        Proceed
                    </Button>
                </SharedElement>
            </View>
        </StyledBody>
    )
}
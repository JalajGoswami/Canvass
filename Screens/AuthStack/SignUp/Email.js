import React, { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, useTheme } from 'react-native-paper'
import { SharedElement } from 'react-navigation-shared-element'
import StyledBody from 'Components/Common/StyledBody'
import StyledText from 'Components/Common/StyledText'
import { DisplayFont } from 'theme/theme'
import * as Yup from 'yup'
import { Formik } from 'formik'
import FormInput from 'Components/Common/FormInput'
import { showToast } from 'Components/Common/StyledToast'
import API from 'utils/API'

const validationSchema = Yup.object({
    email: Yup.string()
        .required('Required')
        .email('Not a valid Email')
})

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
        },
        btn: {
            marginHorizontal: 25,
            borderRadius: 4,
            marginTop: 2,
        },
        btnTxt: {
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: DisplayFont,
        }
    }))

    async function handleProceed(data) {
        try {
            await API('/auth/verify-email').post(data)
            navigation.navigate('SignUp/Verify', data)
        }
        catch (err) {
            showToast(err?.message)
        }
    }

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
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleProceed}
            >
                {formProps => (
                    <View style={styles.formWrapper}>
                        <FormInput
                            formProps={formProps}
                            label='Email Address' name='email'
                            keyboardType='email-address'
                            style={styles.input}
                            helperTextStyle={{ marginHorizontal: 25 }}
                        />
                        <SharedElement id='proceed_btn'>
                            <Button
                                mode='contained'
                                style={styles.btn}
                                contentStyle={{ paddingVertical: 5 }}
                                labelStyle={styles.btnTxt}
                                onPress={formProps.handleSubmit}
                            >
                                Proceed
                            </Button>
                        </SharedElement>
                    </View>
                )}
            </Formik>
        </StyledBody>
    )
}
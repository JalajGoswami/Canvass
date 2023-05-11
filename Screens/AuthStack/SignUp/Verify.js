import React, { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { SharedElement } from 'react-navigation-shared-element'
import StyledBody from 'Components/Common/StyledBody'
import StyledText from 'Components/Common/StyledText'
import { DisplayFont } from 'theme/theme'
import { useRoute } from '@react-navigation/native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import FormInput from 'Components/Common/FormInput'
import { showToast } from 'Components/Common/StyledToast'
import API from 'utils/API'

const validationSchema = Yup.object({
    code: Yup.number()
        .required('Required')
})

export default function Verify({ navigation }) {
    const { params } = useRoute()
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

    async function handleProceed({ code }) {
        try {
            const res = await API('/auth/verify-code').post({
                email: params.email, code
            })
            if (!res.data?.verified)
                throw Error('Incorrect Code try again or resend Email')
            navigation.navigate('SignUp/Profile', params)
        }
        catch (err) {
            showToast(err?.message)
        }
    }

    return (
        <StyledBody variant='neutral'>
            <Image source={require('assets/images/connect.png')}
                resizeMode='contain' style={styles.image} />
            <SharedElement id='title'>
                <StyledText variant='title-bold' size={15}
                    style={styles.title}
                >
                    Verify your Email by Verification Code
                </StyledText>
            </SharedElement>
            <Formik
                initialValues={{ code: '' }}
                validationSchema={validationSchema}
                onSubmit={handleProceed}
            >
                {formProps => (
                    <View style={styles.formWrapper}>
                        <FormInput
                            formProps={formProps}
                            label='Verification Code' name='code'
                            keyboardType='numeric'
                            style={styles.input}
                            helperTextStyle={{ marginHorizontal: 25 }}
                        />
                        <SharedElement id='proceed_btn'>
                            <Button
                                mode='contained' contentStyle={{ paddingVertical: 5 }}
                                style={styles.btn}
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
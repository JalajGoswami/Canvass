import { StyleSheet, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { DisplayFont } from 'theme/theme'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import FormInput from 'Components/Common/FormInput'
import { LoginSchema } from 'utils/FormSchemas'
import { login } from 'store/slices/user'

export default function LoginForm() {
    const [passHidden, setPassHidden] = useState(true)
    const dispatch = useDispatch()

    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        input: {
            width: '90%',
            marginTop: 20,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '90%',
        },
        forgotBtn: {
            marginVertical: 1.5,
            marginHorizontal: 1,
            fontSize: 13,
        },
        submitBtn: {
            width: '90%',
            paddingVertical: 2,
            marginTop: 12,
        },
        submitBtnTxt: {
            fontFamily: DisplayFont,
            fontWeight: 'bold',
            fontSize: 17,
        }
    }), [])

    return (
        <Formik
            initialValues={{
                email: '', password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values,) => {
                dispatch(login(values))
            }}
        >
            {formProps => (
                <View style={styles.container}>
                    <FormInput
                        formProps={formProps}
                        name='email' label='Email Address'
                        style={styles.input}
                        keyboardType='email-address'
                        left={<TextInput.Icon icon="email" size={20} />}
                        autoCapitalize='none' autoCorrect={false}
                    />
                    <FormInput
                        formProps={formProps}
                        name='password' label='Password'
                        style={styles.input}
                        secureTextEntry={passHidden}
                        right={<TextInput.Icon
                            icon={passHidden ? 'eye' : 'eye-off'}
                            onPress={() => setPassHidden(val => !val)} />}
                        left={<TextInput.Icon icon="lock" size={20} />}
                        autoCapitalize='none' autoCorrect={false}
                    />
                    <View style={styles.row}>
                        <Button labelStyle={styles.forgotBtn}>
                            Forgot Password
                        </Button>
                    </View>
                    <Button style={styles.submitBtn} mode='contained'
                        labelStyle={styles.submitBtnTxt}
                        theme={{ roundness: 2 }}
                        onPress={formProps.handleSubmit}
                    >
                        Login
                    </Button>
                </View>
            )}
        </Formik>
    )
}
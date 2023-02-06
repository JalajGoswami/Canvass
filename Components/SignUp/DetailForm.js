import { StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import { Formik } from 'formik'
import FormInput from '../Common/FormInput'
import { Button, TextInput } from 'react-native-paper'
import { DisplayFont } from '../../theme/theme'
import { SignupSchema } from '../../utils/FormSchemas'

export default function DetailForm() {
    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: 10,
        },
        input: {
            width: '90%',
            marginTop: 8,
        },
        submitBtn: {
            width: '90%',
            paddingVertical: 3,
            marginTop: 10,
        },
        submitBtnTxt: {
            fontFamily: DisplayFont,
            fontWeight: 'bold',
            fontSize: 17,
        }
    }))
    return (
        <Formik
            initialValues={{
                user_name: '', full_name: '',
                password: '', confirm_password: '',
                about: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values)
            }}
            validate={values => console.log(values)}
        >
            {formProps => (
                <View style={styles.container}>
                    <FormInput
                        formProps={formProps}
                        name='user_name' label='User Name'
                        style={styles.input}
                        info='Your unique Username'
                        autoCapitalize='none' autoCorrect={false}
                    />
                    <FormInput
                        formProps={formProps}
                        name='full_name' label='Full Name'
                        style={styles.input}
                    />
                    <FormInput
                        formProps={formProps}
                        name='password' label='Password'
                        style={styles.input}
                    />
                    <FormInput
                        formProps={formProps}
                        name='confirm_password' label='Confirm Password'
                        style={styles.input}
                        secureTextEntry
                    />
                    <FormInput
                        formProps={formProps}
                        name='about' label='About You'
                        style={styles.input}
                        multiline numberOfLines={2}
                    />
                    {/* <TextInput style={styles.input} /> */}
                    <Button mode='contained'
                        style={styles.submitBtn}
                        labelStyle={styles.submitBtnTxt}
                        theme={{ roundness: 1 }}
                        onPress={formProps.handleSubmit}
                    >
                        Get Started
                    </Button>
                </View>
            )}
        </Formik>
    )
}
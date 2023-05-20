import { StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import { Formik } from 'formik'
import FormInput from 'Components/Common/FormInput'
import { Button } from 'react-native-paper'
import { DisplayFont } from 'theme/theme'
import { SignupSchema } from 'utils/FormSchemas'
import { debounce } from 'utils/helper'
import API from 'utils/API'

export default function DetailForm({ onSubmit }) {
    const [checkUserName, resetDebounce] = useMemo(() => debounce(
        async (values) => {
            try { SignupSchema.validateSync(values) }
            catch { return {} }
            try {
                const res = await API('/user/check-user-name').get({
                    params: { user_name: values.user_name }
                })
                return res.data.exist ?
                    { user_name: 'UserName already exist' } : {}
            }
            catch (err) { return { user_name: err.message } }
        }, 800), [])

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
            validate={checkUserName}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
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
                    <Button mode='contained'
                        style={styles.submitBtn}
                        labelStyle={styles.submitBtnTxt}
                        theme={{ roundness: 1 }}
                        onPress={() => {
                            if (formProps.isSubmitting) return;
                            resetDebounce()
                            formProps.handleSubmit()
                        }}
                        loading={formProps.isSubmitting}
                    >
                        Get Started
                    </Button>
                </View>
            )}
        </Formik>
    )
}
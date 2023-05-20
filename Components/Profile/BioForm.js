import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Switch, useTheme } from 'react-native-paper'
import StyledText from 'Components/Common/StyledText'
import { Formik } from 'formik'
import FormInput from 'Components/Common/FormInput'
import { UpdateProfileSchema } from 'utils/FormSchemas'
import { useSelector } from 'react-redux'
import API from 'utils/API'

export default function BioForm({ onSubmit }) {
    const theme = useTheme()
    const { user } = useSelector(state => state.user)

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
        },
        txtInput: {
            marginTop: 1,
        },
        row: {
            marginVertical: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 2,
        },
        submitBtn: {
            marginTop: 20
        }
    })

    function InputField({
        formProps, name, label, ...rest
    }) {
        return (
            <FormInput
                formProps={formProps}
                name={name} label={label}
                mode='outlined' style={styles.txtInput}
                selectionColor={theme.colors.primary + '55'}
                {...rest}
            />
        )
    }

    return (
        <Formik
            initialValues={{
                user_name: user.user_name, full_name: user.full_name,
                about: user.about, website: user.website,
                private: user.private
            }}
            validate={async (values) => {
                try {
                    UpdateProfileSchema.validateSync(values)
                }
                catch { return {} }
                try {
                    const res = await API('/user/check-user-name').get({
                        params: { user_name: values.user_name }
                    })
                    if (res.data.exist)
                        return { user_name: 'UserName already exist' }
                    else
                        return {}
                }
                catch (err) {
                    return { user_name: err.message }
                }
            }}
            validationSchema={UpdateProfileSchema}
            onSubmit={(val) => console.log(val)}
        >
            {formProps => (
                <View style={styles.container}>
                    <InputField
                        formProps={formProps}
                        label='Your Full Name' name='full_name'
                    />
                    <InputField
                        formProps={formProps}
                        label='Unique UserName' name='user_name'
                    />
                    <InputField
                        formProps={formProps}
                        label='Your Bio' name='about'
                        multiline
                    />
                    <InputField
                        formProps={formProps}
                        label='Website Url' name='website'
                        onLayout={e => (e.target.setNativeProps(
                            { selection: { start: 0, end: 0 } }
                        ))}
                    />
                    <View style={styles.row}>
                        <StyledText size={12}>Private Profile</StyledText>
                        <Switch
                            value={formProps.values.private}
                            onValueChange={val =>
                                formProps.setFieldValue('private', val)
                            }
                        />
                    </View>
                    <Button mode='contained'
                        buttonColor={theme.colors.onPrimaryContainer}
                        textColor={theme.colors.background}
                        theme={{ roundness: 2 }}
                        style={styles.submitBtn}
                        onPress={formProps.handleSubmit}
                    >
                        Update
                    </Button>
                </View>
            )}
        </Formik>
    )
}
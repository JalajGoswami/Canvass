import { StyleSheet, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { DisplayFont } from '../../theme/theme'

export default function LoginForm() {
    const [passHidden, setPassHidden] = useState(true)

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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                label='Email Address'
                keyboardType='email-address'
                left={<TextInput.Icon icon="email" size={20} />}
            />
            <TextInput
                style={styles.input}
                label='Password'
                secureTextEntry={passHidden}
                right={<TextInput.Icon
                    icon={passHidden ? 'eye' : 'eye-off'}
                    onPress={() => setPassHidden(val => !val)} />}
                left={<TextInput.Icon icon="lock" size={20} />}
            />
            <View style={styles.row}>
                <Button labelStyle={styles.forgotBtn}>
                    Forgot Password
                </Button>
            </View>
            <Button style={styles.submitBtn} mode='contained'
                labelStyle={styles.submitBtnTxt}
                theme={{roundness: 2}}
            >
                Login
            </Button>
        </View>
    )
}
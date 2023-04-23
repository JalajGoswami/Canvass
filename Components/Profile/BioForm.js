import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Switch, TextInput, useTheme } from 'react-native-paper'
import StyledText from 'Components/Common/StyledText'

export default function BioForm() {
    const theme = useTheme()
    const [privateProfile, setPrivateProfile] = useState(false)

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
        },
        txtInput: {
            marginBottom: 16,
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
        label, defaultValue, ...rest
    }) {
        return (
            <TextInput
                label={label}
                mode='outlined' style={styles.txtInput}
                defaultValue={defaultValue}
                selectionColor={theme.colors.primary + '55'}
                {...rest}
            />
        )
    }

    return (
        <View style={styles.container}>
            <InputField
                label='Your Full Name'
                defaultValue='Jalaj Goswami'
                maxLength={50}
            />
            <InputField
                label='Unique UserName'
                defaultValue='jalaj_goswami'
                maxLength={50}
            />
            <InputField
                label='Your Bio' multiline maxLength={200}
                defaultValue={'Student of Computer Science Engg.\n#Autofreak #GearHead\nCheck my Linkedin 👇'}
            />
            <InputField
                label='Website Url'
                defaultValue='https://www.linkedin.com/in/jalaj-goswami-87637b220/'
                maxLength={150}
                onLayout={e => (e.target.setNativeProps(
                    { selection: { start: 0, end: 0 } }
                ))}
            />
            <View style={styles.row}>
                <StyledText size={12}>Private Profile</StyledText>
                <Switch
                    value={privateProfile}
                    onValueChange={setPrivateProfile}
                />
            </View>
            <Button mode='contained'
                buttonColor={theme.colors.onPrimaryContainer}
                textColor={theme.colors.background}
                theme={{ roundness: 2 }}
                style={styles.submitBtn}
            >
                Update
            </Button>
        </View>
    )
}
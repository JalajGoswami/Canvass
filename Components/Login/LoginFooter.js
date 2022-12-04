import { StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import StyledText from '../Common/StyledText'
import { Button, useTheme } from 'react-native-paper'

export default function LoginFooter() {
    const theme = useTheme()
    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
        },
        txt: {
            color: theme.colors.onSurfaceVariant,
        },
        btn: {
            fontSize: 17,
            marginVertical: 6,
            marginHorizontal: 20,
            fontFamily: 'Montserrat',
            fontWeight: 'bold'
        }
    }), [])
    return (
        <View style={styles.container}>
            <StyledText style={styles.txt}>Don't have an Account ?</StyledText>
            <Button textColor={theme.colors.tertiary}
                labelStyle={styles.btn}
                onPress={() => null}
            >
                Sign Up
            </Button>
        </View>
    )
}
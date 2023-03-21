import { StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import StyledText from 'Components/Common/StyledText'
import { Button, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { DisplayFont } from 'theme/theme'

export default function LoginFooter() {
    const navigation = useNavigation()
    const theme = useTheme()
    const styles = useMemo(() => StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
        },
        btn: {
            fontSize: 17,
            marginVertical: 6,
            marginHorizontal: 20,
            fontFamily: DisplayFont,
            fontWeight: 'bold'
        }
    }), [])
    return (
        <View style={styles.container}>
            <StyledText color='onSurfaceVariant'>
                Don't have an Account ?
            </StyledText>
            <Button textColor={theme.colors.tertiary}
                labelStyle={styles.btn}
                onPress={() => navigation.navigate('SignUp')}
            >
                Sign Up
            </Button>
        </View>
    )
}
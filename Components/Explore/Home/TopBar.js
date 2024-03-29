import { StyleSheet, Image } from 'react-native'
import React from 'react'
import Box from 'Components/Common/Box'
import { Button, useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

export default function TopBar() {
    const { appTheme, systemTheme } = useSelector(state => state.settings)
    const theme = useTheme()
    const { navigate } = useNavigation()

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 55,
        },
        logo: {
            height: 52,
            width: 150,
        },
        srchBtn: {
            width: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })

    const logo = (appTheme || systemTheme) == 'dark' ?
        require('assets/images/long-logo-dark.png')
        : require('assets/images/long-logo-light.png')

    return (
        <Box style={styles.container}>
            <Image style={styles.logo}
                source={logo} resizeMode='contain'
            />
            <Button
                onPress={() => navigate('Explore/Search')}
                style={styles.srchBtn} contentStyle={styles.srchBtn}
                textColor={theme.colors.secondary}
            >
                <FontAwesome5 name='search' size={20} />
            </Button>
        </Box>
    )
}
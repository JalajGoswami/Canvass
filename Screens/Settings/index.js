import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SelectTheme from './SelectTheme'
import { useTheme } from 'react-native-paper'
import { DisplayFont } from 'theme/theme'

const { Navigator, Screen } = createStackNavigator()

export default function Settings() {
    const theme = useTheme()

    return (
        <Navigator>
            <Screen name='Settings/Theme'
                component={SelectTheme}
                options={{
                    title: 'Theme',
                    headerStyle: {
                        backgroundColor: theme.colors.background
                    },
                    headerTitleStyle: { fontFamily: DisplayFont }
                }}
            />
        </Navigator>
    )
}
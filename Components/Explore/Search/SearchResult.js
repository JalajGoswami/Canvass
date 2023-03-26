import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { DisplayFont } from 'theme/theme'
import { useTheme } from 'react-native-paper'
import ResultTab from './ResultTab'


const { Navigator, Screen } = createMaterialTopTabNavigator()


export default function SearchResult() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        bar: {
            backgroundColor: theme.colors.background
        },
        label: {
            textTransform: 'capitalize',
            fontFamily: DisplayFont,
        }
    })
    return (
        <Navigator
            screenOptions={{
                tabBarLabelStyle: styles.label,
                tabBarStyle: styles.bar
            }}
        >
            <Screen
                name="Explore/Search/All"
                component={ResultTab}
                options={{
                    tabBarLabel: 'All'
                }}
            />
            <Screen
                name="Explore/Search/Accounts"
                component={ResultTab}
                options={{
                    tabBarLabel: 'Accounts'
                }}
            />
            <Screen
                name="Explore/Search/Tags"
                component={ResultTab}
                options={{
                    tabBarLabel: 'Tags'
                }}
            />
        </Navigator>
    )
}
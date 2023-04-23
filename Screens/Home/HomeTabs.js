import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import { noHeader } from 'theme/ScreenOptions'
import Explore from './Explore'
import Notifications from './Notifications'
import Profile from './Profile'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Box from 'Components/Common/Box'
import dropShadow from 'theme/dropShadow'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const { Navigator, Screen } = createBottomTabNavigator()

const ScreensWithoutTabs = [
    'Explore/Search', 'Explore/Comments', 'Profile/Comments',
    'Profile/Edit', 'Profile/Actions'
]

export default function HomeTabs() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        tabBar: {
            backgroundColor: theme.colors.onPrimary,
            borderTopWidth: 0,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 6,
            overflow: 'visible',
            position: 'absolute',
            ...dropShadow(
                'high', theme.colors.onPrimaryContainer, 'up'
            ),
        },
        activeIconBox: {
            backgroundColor: theme.colors.primaryContainer,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 16,
        },
        inactiveIconBox: {
            backgroundColor: '#00000000'
        },
        postBtn: {
            transform: [{ translateY: -10 }],
            color: theme.colors.secondary,
            ...dropShadow(
                'medium', theme.colors.onSecondaryContainer, 'center'
            ),
            backgroundColor: theme.colors.onPrimary,
            borderRadius: 22,
        },
    })
    function IconBox({ focused, children }) {
        return <Box
            style={styles[focused ? 'activeIconBox' : 'inactiveIconBox']}
        >
            {children}
        </Box>
    }

    return (
        <Navigator
            screenOptions={({ route }) => {
                let routeName = getFocusedRouteNameFromRoute(route)
                routeName = routeName ?? route.name
                return {
                    ...noHeader,
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                    tabBarShowLabel: false,
                    tabBarStyle: ScreensWithoutTabs.includes(routeName)
                        ? { display: 'none' } : styles.tabBar,
                }
            }}
            labeled={false}
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.onBackground}
        >
            <Screen name='Explore' component={Explore}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconBox focused={focused}>
                            <MaterialIcons name='explore'
                                color={color} size={27}
                            />
                        </IconBox>
                    ),
                }}
            />
            <Screen name='Messages' component={Explore}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconBox focused={focused}>
                            <Ionicons name='chatbubbles'
                                color={color} size={25}
                            />
                        </IconBox>
                    )
                }}
            />
            <Screen name='Create-Post' component={Explore}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name='pluscircle' size={44}
                            style={styles.postBtn}
                        />
                    )
                }}
            />
            <Screen name='Notifications' component={Notifications}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconBox focused={focused}>
                            <Ionicons name='notifications'
                                color={color} size={25}
                            />
                        </IconBox>
                    )
                }}
            />
            <Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconBox focused={focused}>
                            <Ionicons name='ios-person-circle'
                                color={color} size={26}
                            />
                        </IconBox>
                    )
                }}
            />
        </Navigator >
    )
}

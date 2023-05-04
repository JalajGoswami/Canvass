import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import { noHeader } from 'theme/ScreenOptions'
import Explore from './Explore'
import Notifications from './Notifications'
import Profile from './Profile'
import CreatePost from './CreatePost'
import Chats from './Chats'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Box from 'Components/Common/Box'
import dropShadow from 'theme/dropShadow'
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native'

const { Navigator, Screen } = createBottomTabNavigator()

const ScreensWithoutTabs = [
    'Explore/Search', 'Explore/Comments', 'Profile/Comments',
    'Profile/Edit', 'Profile/Actions', 'Chats/SendMessage', 'Chats/Chat'
]

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign)

export default function HomeTabs() {
    const theme = useTheme()
    const route = useRoute()
    const iconElevated = !getFocusedRouteNameFromRoute(route)
        ?.includes('Create-Post')
    const translateY = useRef(new Animated.Value(-10)).current
    const iconSize = useRef(new Animated.Value(1.25)).current
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
            color: theme.colors.secondary,
            ...dropShadow(
                'medium', theme.colors.onSecondaryContainer, 'center'
            ),
            backgroundColor: theme.colors.onPrimary,
            borderRadius: 22,
            transform: [
                { translateY }, { scale: iconSize }
            ],
        },
    })

    useEffect(() => {
        animateIcon(iconElevated)
    }, [iconElevated])

    function animateIcon(elevated) {
        translateY.stopAnimation()
        Animated.timing(translateY, {
            toValue: elevated ? -10 : -2,
            duration: 250,
            useNativeDriver: true,
        }).start()
        Animated.timing(iconSize, {
            toValue: elevated ? 1.25 : 1,
            duration: 250,
            useNativeDriver: true,
        }).start()
    }

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
                    tabBarHideOnKeyboard: true,
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
            <Screen name='Messages' component={Chats}
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
            <Screen name='Create-Post' component={CreatePost}
                options={{
                    tabBarIcon: () => (
                        <AnimatedIcon name='pluscircle'
                            size={35}
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

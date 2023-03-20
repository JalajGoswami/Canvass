import { createStackNavigator } from '@react-navigation/stack'
import React, { lazy } from 'react'
import { noHeader } from 'theme/header'
import Login from './Login'

const SignUp = lazy(() => import('./SignUp'))

const { Navigator, Screen } = createStackNavigator()

export default function AuthStack() {
    return (
        <Navigator screenOptions={noHeader}>
            <Screen name='Login' component={Login} />
            <Screen name='SignUp' component={SignUp} />
        </Navigator>
    )
}

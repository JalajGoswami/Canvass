import React from 'react'
import Chat from './Chat'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

export default function User() {
    return (
        <Navigator>
            <Screen name='Chat' component={Chat} />
        </Navigator>
    )
}
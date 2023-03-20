import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { noHeader } from 'theme/header'
import Explore from './Explore/Explore'
import Search from 'Screens/Home/Explore/Search'

const { Navigator, Screen } = createStackNavigator()

export default function ExploreStack() {
    return (
        <Navigator screenOptions={noHeader}>
            <Screen name='Explore/Home' component={Explore} />
            <Screen name='Explore/Search' component={Search} />
        </Navigator>
    )
}
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import React from 'react'
import { noHeader } from 'theme/header'
import Profile from './Profile'
import Comments from 'Screens/User/Comments'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function ExploreStack() {
    return (
        <Navigator screenOptions={noHeader}>
            <Screen name='Profile/Home' component={Profile} />
            <Screen name='Profile/Comments' component={Comments}
                sharedElements={(route) => {
                    const { post } = route.params
                    return [`post.${post.id}`]
                }}
            />
        </Navigator>
    )
}
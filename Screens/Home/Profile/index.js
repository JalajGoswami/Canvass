import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import React from 'react'
import { FadeInTransition, noHeader } from 'theme/ScreenOptions'
import Profile from './Profile'
import Edit from './Edit'
import Comments from 'Screens/User/Comments'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function ExploreStack() {
    return (
        <Navigator screenOptions={{
            ...noHeader,
            ...FadeInTransition
        }}>
            <Screen name='Profile/Home' component={Profile} />
            <Screen name='Profile/Edit' component={Edit}
                sharedElements={() =>
                    ['profile-pic', 'profile-edit-btn']
                }
            />
            <Screen name='Profile/Comments' component={Comments}
                sharedElements={(route) => {
                    const { post } = route.params
                    return [`post.${post.id}`]
                }}
            />
        </Navigator>
    )
}
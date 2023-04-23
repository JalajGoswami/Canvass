import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import React from 'react'
import { FadeInTransition, noHeader } from 'theme/ScreenOptions'
import Explore from './Explore'
import Search from 'Screens/Home/Explore/Search'
import Comments from 'Screens/User/Comments'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function ExploreStack() {
    return (
        <Navigator screenOptions={{
            ...noHeader,
            ...FadeInTransition
        }}>
            <Screen name='Explore/Home' component={Explore} />
            <Screen name='Explore/Search' component={Search} />
            <Screen name='Explore/Comments' component={Comments}
                sharedElements={(route) => {
                    const { post } = route.params
                    return [`post.${post.id}`]
                }}
            />
        </Navigator>
    )
}
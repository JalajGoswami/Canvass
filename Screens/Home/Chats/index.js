import AllChats from './AllChats'
import SendMessage from './SendMessage'
import Chat from 'Screens/User/Chat'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { FadeInTransition, noHeader } from 'theme/ScreenOptions'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function Chats() {
    return (
        <Navigator
            screenOptions={{
                ...noHeader,
                ...FadeInTransition
            }}
        >
            <Screen name='Chats/Home' component={AllChats} />
            <Screen name='Chats/SendMessage' component={SendMessage} />
            <Screen name='Chats/Chat' component={Chat}
                sharedElements={(route) => {
                    const { id } = route.params
                    return [`chat.${id}.usrImg`]
                }}
            />
        </Navigator>
    )
}
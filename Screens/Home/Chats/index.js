import AllChats from './AllChats'
import SendMessage from './SendMessage'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { noHeader } from 'theme/ScreenOptions'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function Chats() {
    return (
        <Navigator
            screenOptions={noHeader}
        >
            <Screen name='Chats/Home' component={AllChats} />
            <Screen name='Chats/SendMessage' component={SendMessage} />
        </Navigator>
    )
}
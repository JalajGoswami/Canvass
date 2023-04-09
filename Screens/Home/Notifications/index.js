import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/Notifications/Header'
import NotificationSections from 'Components/Notifications/NotificationSections'
const DATA = [
    {
        type: 'new_follower',
        content: '@user_101 started following you.',
        user: 'user_101',
        profile_pic: require('assets/images/profile.png'),
    },
    {
        type: 'new_comment',
        content: '@user_101 comment on your post: @jalaj_goswami You are super 😎',
        user: 'user_101',
        profile_pic: require('assets/images/profile.png'),
        thumbnail: require('assets/images/categories/traveling.webp')
    },
    {
        type: 'post_like',
        content: '@user_101 liked your post.',
        user: 'user_101',
        profile_pic: require('assets/images/profile.png'),
        thumbnail: require('assets/images/categories/traveling.webp')
    },
]
export default function Notifications() {
    return (
        <StyledBody>
            <Header />
            <NotificationSections
                notifications={DATA}
            />
        </StyledBody>
    )
}
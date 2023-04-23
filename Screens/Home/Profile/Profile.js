import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import ProfilePic from 'Components/User/Profile/ProfilePic'
import UserBio from 'Components/User/Profile/UserBio'
import ProfileStats from 'Components/User/Profile/ProfileStats'
import UserPosts from 'Components/User/Profile/UserPosts'

function Header() {
    return (
        <>
            <ProfilePic />
            <UserBio />
            <ProfileStats />
        </>
    )
}

export default function Profile() {
    return (
        <StyledBody>
            <UserPosts
                HeaderComp={Header}
            />
        </StyledBody>
    )
}
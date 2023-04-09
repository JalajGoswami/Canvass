import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import ProfilePic from 'Components/User/Profile/ProfilePic'
import UserBio from 'Components/User/Profile/UserBio'

export default function Profile() {
    return (
        <StyledBody>
            <ProfilePic />
            <UserBio />
        </StyledBody>
    )
}
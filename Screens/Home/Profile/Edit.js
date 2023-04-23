import { KeyboardAvoidingView, View } from 'react-native'
import React from 'react'
import ProfilePic from 'Components/User/Profile/ProfilePic'
import StyledBody from 'Components/Common/StyledBody'
import BioForm from 'Components/Profile/BioForm'

export default function Edit() {
    return (
        <StyledBody>
            <KeyboardAvoidingView behavior='position'>
                <ProfilePic editing />
                <BioForm />
            </KeyboardAvoidingView>
        </StyledBody>
    )
}
import { KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import ProfilePic from 'Components/User/Profile/ProfilePic'
import StyledBody from 'Components/Common/StyledBody'
import BioForm from 'Components/Profile/BioForm'

export default function Edit() {
    const [imgFile, setImgFile] = useState()

    return (
        <StyledBody>
            <KeyboardAvoidingView behavior='position'>
                <ProfilePic editing
                    imgFile={imgFile}
                    setImgFile={setImgFile}
                />
                <BioForm />
            </KeyboardAvoidingView>
        </StyledBody>
    )
}
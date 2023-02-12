import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import StyledBody from '../../../Components/Common/StyledBody'
import DetailForm from '../../../Components/SignUp/DetailForm'
import ProfileImage from '../../../Components/SignUp/ProfileImage'

export default function Profile({ navigation }) {

    return (
        <StyledBody>
            <KeyboardAvoidingView behavior='position'>
                <ProfileImage />
                <DetailForm navigation={navigation} />
            </KeyboardAvoidingView>
        </StyledBody>

    )
}
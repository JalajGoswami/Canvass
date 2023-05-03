import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/CreatePost/Header'
import CreateForm from 'Components/CreatePost/CreateForm'
import { KeyboardAvoidingView } from 'react-native'

export default function CreatePost() {
    return (
        <StyledBody>
            <KeyboardAvoidingView 
                behavior='position'
                keyboardVerticalOffset={-20}
            >
                <Header />
                <CreateForm />
            </KeyboardAvoidingView>
        </StyledBody>
    )
}
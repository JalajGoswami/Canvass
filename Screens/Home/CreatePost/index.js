import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/CreatePost/Header'
import CreateForm from 'Components/CreatePost/CreateForm'

export default function CreatePost() {
    return (
        <StyledBody>
            <Header />
            <CreateForm />
        </StyledBody>
    )
}
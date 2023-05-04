import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/User/Chat/Header'
import Messages from 'Components/User/Chat/Messages'
import InputBox from 'Components/User/Chat/InputBox'

export default function Chat() {
    return (
        <StyledBody>
            <Header />
            <Messages />
            <InputBox />
        </StyledBody>
    )
}
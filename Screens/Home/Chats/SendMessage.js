import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/Chats/SendMessage/Header'
import SelectUsers from 'Components/Chats/SendMessage/SelectUsers'

export default function SendMessage() {
  return (
    <StyledBody>
      <Header />
      <SelectUsers />
    </StyledBody>
  )
}
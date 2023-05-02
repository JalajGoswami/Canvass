import { View } from 'react-native'
import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Header from 'Components/Chats/AllChats/Header'
import Chats from 'Components/Chats/AllChats/Chats'

export default function AllChats() {
  return (
    <StyledBody>
      <Header />
      <Chats />
    </StyledBody>
  )
}
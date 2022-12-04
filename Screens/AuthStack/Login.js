import React from 'react'
import StyledText from '../../Components/Common/StyledText'
import StyledBody from '../../Components/Common/StyledBody'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'
import LoginHeader from '../../Components/Login/LoginHeader'

export default function Login() {
  const theme = useTheme()

  return (
    <StyledBody variant='error'>
      <LoginHeader />
    </StyledBody>
  )
}
import React from 'react'
import StyledText from '../../Components/Common/StyledText'
import StyledBody from '../../Components/Common/StyledBody'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'

export default function Login() {
  const theme = useTheme()

  return (
    <StyledBody style={{backgroudColor: theme.colors.primary}}>
      <StyledText>Login</StyledText>
    </StyledBody>
  )
}
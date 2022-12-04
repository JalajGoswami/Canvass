import React from 'react'
import StyledText from '../../Components/Common/StyledText'
import StyledBody from '../../Components/Common/StyledBody'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'

export default function SignUp() {
    const theme = useTheme()

  return (
    <StyledBody variant='neutral' statusBarColor={theme.colors.primaryContainer}>
      <StyledText>Sign Up</StyledText>
    </StyledBody>
  )
}
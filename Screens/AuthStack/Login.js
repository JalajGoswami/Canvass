import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import { useTheme } from 'react-native-paper'
import LoginHeader from 'Components/Login/LoginHeader'
import LoginForm from 'Components/Login/LoginForm'
import LoginFooter from 'Components/Login/LoginFooter'

export default function Login() {
  const theme = useTheme()

  return (
    <StyledBody variant='surface'
      statusBarColor={theme.colors.surface}
    >
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </StyledBody>
  )
}
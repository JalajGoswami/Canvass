import React from 'react'
import StyledText from '../../Components/Common/StyledText'
import StyledBody from '../../Components/Common/StyledBody'
import { View } from 'react-native'

export default function Login() {
  console.log('login')
  return (
    <View style={{ backgroundColor: '#000',flex: 1 }}>
      <StyledText>Login</StyledText>
    </View>
  )
}
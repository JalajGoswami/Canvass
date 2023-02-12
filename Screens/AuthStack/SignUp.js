import { TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { noHeader } from '../../theme/header'
import Email from './SignUp/Email'
import Prefrence from './SignUp/Prefrence'
import Profile from './SignUp/Profile'
import Verify from './SignUp/Verify'

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function SignUp() {
  return (
    <Navigator screenOptions={{
      ...noHeader,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
      <Screen name='SignUp/Email' component={Email}
        sharedElements={() => ['title', 'proceed_btn']}
      />
      <Screen name='SignUp/Verify' component={Verify}
      />
      <Screen name='SignUp/Profile' component={Profile}
      />
      <Screen name='SignUp/Prefrence' component={Prefrence}
      />
    </Navigator>
  )
}
import { StatusBar } from 'react-native'
import React from 'react'
import Box from 'Components/Common/Box'
import StyledText from 'Components/Common/StyledText'
import getTheme from 'hooks/getTheme'
import { useTheme } from 'react-native-paper'

export default function Actions() {
  const { isDarkTheme } = getTheme()
  const theme = useTheme()

  return (
    <Box style={{ height: '50%', marginTop: 'auto' }}>
      <StatusBar animated
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? theme.colors.background
          : (theme.colors.surfaceVariant + 'bb')
        }
      />
      <StyledText>Modal</StyledText>
    </Box>
  )
}
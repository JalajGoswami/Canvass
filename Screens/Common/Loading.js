import React, { useEffect } from 'react'
// import StyledText from 'Components/Common/StyledText'
import StyledBody from 'Components/Common/StyledBody'
import RNBootSplash from 'react-native-bootsplash'

export default function Loading() {
  useEffect(() => () => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <StyledBody>
      {/* <StyledText size={25}>Loading</StyledText> */}
    </StyledBody>
  )
}
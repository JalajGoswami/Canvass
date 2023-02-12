import React from 'react'
import { StyleSheet } from 'react-native'
import StyledBody from '../../../Components/Common/StyledBody'
import StyledText from '../../../Components/Common/StyledText'

export default function Prefrence() {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        headerTxt: {
            width: '90%',
            marginTop: 20,
        }
    })
  return (
    <StyledBody style={styles.container}>
          <StyledText style={styles.headerTxt} variant='title'>
              Choose your favorite fields of interest (atleast 3)
          </StyledText>
    </StyledBody>
  )
}
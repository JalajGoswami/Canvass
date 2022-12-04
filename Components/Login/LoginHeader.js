import { Image, StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import StyledText from '../Common/StyledText'
import { useTheme } from 'react-native-paper'

export default function LoginHeader() {
  const theme = useTheme()

  const styles = useMemo(() => StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 30,
      width: '80%',
      alignSelf: 'center'
    },
    image: {
      width: 150,
      height: 150,
    },
    title: {
      color: theme.colors.secondary,
      marginBottom: 5,
    },
    tagline: {
      textAlign: 'center',
      color: theme.colors.onSurfaceVariant,
    }
  }), [theme])

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain'
        source={require('../../assets/images/Canvass-Icon.png')}
      />
      <StyledText variant='title-bold' size={16} style={styles.title}>
        Canvass
      </StyledText>
      <StyledText variant='title' size={7} style={styles.tagline}>
        Social Platform for discussion & propogation of beliefs
      </StyledText>
    </View>
  )
}
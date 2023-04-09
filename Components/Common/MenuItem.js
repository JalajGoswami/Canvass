import { StyleSheet } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'
import React from 'react'
import StyledText from 'Components/Common/StyledText'

export default function MenuItem({
  IconComponent, icon, iconSize = 20, title,
  onPress = () => null
}) {
  const theme = useTheme()
  const styles = StyleSheet.create({
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuItemIcon: {
      width: 40,
      height: 36,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    menuItemTxt: {
      color: theme.colors.onSurfaceVariant,
      paddingRight: 12,
    },
  })

  return (
    <TouchableRipple borderless
      rippleColor={theme.colors.primary + '22'}
      style={styles.menuItem}
      onPress={onPress}
    >
      <>
        <IconComponent
          color={theme.colors.onSurfaceVariant}
          name={icon} size={iconSize}
          style={styles.menuItemIcon}
        />
        <StyledText style={styles.menuItemTxt}>
          {title}
        </StyledText>
      </>
    </TouchableRipple>
  )
}
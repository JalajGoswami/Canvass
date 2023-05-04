import { StyleSheet } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'
import React from 'react'
import StyledText from 'Components/Common/StyledText'

export default function MenuItem({
  IconComponent, icon, iconSize = 20, title,
  onPress = () => null, compact = true
}) {
  const theme = useTheme()
  const scale = compact ? 1 : 1.1
  const styles = StyleSheet.create({
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuItemIcon: {
      width: 40 * scale,
      height: 36 * scale,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    menuItemTxt: {
      color: theme.colors.onSurfaceVariant,
      paddingRight: 12 * scale,
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
          name={icon} size={iconSize * scale}
          style={styles.menuItemIcon}
        />
        <StyledText
          style={styles.menuItemTxt}
          size={10 * scale}
        >
          {title}
        </StyledText>
      </>
    </TouchableRipple>
  )
}
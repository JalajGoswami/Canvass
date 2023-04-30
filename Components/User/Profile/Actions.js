import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Box from 'Components/Common/Box'
import StyledText from 'Components/Common/StyledText'
import getTheme from 'hooks/getTheme'
import { TouchableRipple, useTheme } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function Actions() {
  const { isDarkTheme } = getTheme()
  const { navigate } = useNavigation()
  const theme = useTheme()
  const styles = StyleSheet.create({
    box: {
      marginTop: 'auto',
      paddingVertical: 10,
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    icon: {
      color: theme.colors.onBackground,
      width: 40,
    }
  })

  function ActionItem({
    Icon, iconName, label, iconSize = 25, onPress = () => null
  }) {
    return (
      <TouchableRipple
        style={styles.itemRow} onPress={onPress}
        rippleColor={theme.colors.outline + '55'}
      >
        <>
          <Icon
            style={styles.icon}
            name={iconName} size={iconSize}
          />
          <StyledText size={12}>
            {label}
          </StyledText>
        </>
      </TouchableRipple>
    )
  }

  return (
    <Box style={styles.box}>
      <StatusBar animated
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? theme.colors.background
          : (theme.colors.surfaceVariant + 'bb')
        }
      />
      <ActionItem
        Icon={FontAwesome}
        iconName='moon-o'
        label='App Theme'
        onPress={() =>
          navigate('Settings', { screen: 'Settings/Theme' })
        }
      />
      <ActionItem
        Icon={MaterialCommunityIcons}
        iconName='folder-download-outline'
        label='Saved Posts'
      />
      <ActionItem
        Icon={MaterialCommunityIcons}
        iconName='shield-account-outline'
        label='Manage Account'
      />
      <ActionItem
        Icon={AntDesign}
        iconName='notification'
        label='Notifications' iconSize={24}
      />
      <ActionItem
        Icon={AntDesign}
        iconName='deleteusergroup'
        label='Blocked Users'
      />
    </Box>
  )
}
import React, { useState } from 'react'
import StyledText from 'Components/Common/StyledText'
import StyledBody from 'Components/Common/StyledBody'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, RadioButton, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { setAppTheme } from 'store/slices/settings'
import SectionHeader from 'Components/Common/SectionHeader'

export default function SelectTheme() {
  const { appTheme } = useSelector(state => state.settings)
  const dispatch = useDispatch()
  const [value, setValue] = useState(appTheme ?? 'system')
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    itemRow: {
      flexDirection: 'row',
      marginBottom: 10
    },
    btn: {
      alignSelf: 'flex-end'
    }
  })

  const applyTheme = () =>
    dispatch(setAppTheme(value))

  function ListItem({ label, value }) {
    return (
      <View style={styles.itemRow}>
        <TouchableOpacity
          onPress={() => setValue(value)}
          activeOpacity={0.6}
          style={{ flexGrow: 1 }}
        >
          <StyledText size={12}
            color='onSurfaceVariant'
          >
            {label}
          </StyledText>
        </TouchableOpacity>
        <RadioButton.IOS value={value}
          color={theme.colors.tertiary}
        />
      </View>
    )
  }

  return (
    <StyledBody>
      <View style={styles.container}>
        <SectionHeader title='Color Scheme'
          style={{ marginBottom: 10 }} size={8}
        />
        <RadioButton.Group
          onValueChange={v => setValue(v)}
          value={value}
        >
          <ListItem
            label='System (Default)'
            value='system'
          />
          <ListItem
            label='Light Theme'
            value='light'
          />
          <ListItem
            label='Dark Theme'
            value='dark'
          />
        </RadioButton.Group>
        <Button onPress={applyTheme}
          style={styles.btn}
          mode='contained-tonal'
        >
          Apply
        </Button>
      </View>
    </StyledBody>
  )
}
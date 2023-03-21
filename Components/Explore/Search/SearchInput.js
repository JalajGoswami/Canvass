import { Dimensions, StyleSheet, View } from 'react-native'
import { IconButton, TextInput, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useRef } from 'react'

export default function SearchInput({ searchString, onChange }) {
  const theme = useTheme()
  const inputRef = useRef()
  const { goBack } = useNavigation()

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backBtn: {
      width: 40,
      height: 40,
      marginRight: 5,
    },
    input: {
      flexGrow: 1,
      marginRight: 8,
      marginBottom: 4,
      maxWidth: Dimensions.get('window').width - 60
    }
  })

  return (
    <View style={styles.container}>
      <IconButton
        icon='keyboard-backspace'
        onPress={goBack}
        style={styles.backBtn}
        size={32}
      />
      <TextInput
        ref={inputRef}
        mode='outlined'
        style={styles.input}
        returnKeyType='search'
        right={
          <TextInput.Icon
            icon={searchString ? 'close' : 'magnify'}
            rippleColor='#00000000' animated
            onPress={() => {
              inputRef.current?.clear()
              onChange('')
            }}
          />
        }
        outlineStyle={{ borderRadius: 16 }}
        outlineColor={theme.colors.outline}
        activeOutlineColor={theme.colors.secondary}
        selectionColor={theme.colors.surfaceVariant}
        spellCheck={false}
        cursorColor={theme.colors.secondary}
        placeholder='Search anyone or any topic'
        onChangeText={onChange}
      />
    </View>
  )
}
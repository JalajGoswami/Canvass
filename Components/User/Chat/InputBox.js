import { StyleSheet, View, TextInput, Dimensions } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TokenizedText from 'Components/Common/TokenizedText'
import { BodyFont } from 'theme/theme'
import { useRef, useState } from 'react'
import DocumentPicker from 'react-native-document-picker'

export default function InputBox() {
  const inputRef = useRef()
  const [text, setText] = useState('')
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 4,
      paddingHorizontal: 6,
      backgroundColor: theme.colors.surfaceVariant,
    },
    input: {
      flexGrow: 1,
      backgroundColor: theme.colors.surfaceVariant,
      fontFamily: BodyFont,
      marginLeft: 2,
      color: theme.colors.onBackground,
      maxWidth: Dimensions.get('window').width - 56,
      maxHeight: 106,
    },
    postBtn: {
      justifyContent: 'center',
      padding: 10,
      alignSelf: 'center',
      borderRadius: 50,
    },
    btnIcon: {
      transform: [{ translateX: -1.5 }]
    }
  })

  const handleImgSelect = () => {
    DocumentPicker.pickSingle({ type: 'image/*' })
      .then(imgFile => null)
      .catch(err => null)
  }

  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={handleImgSelect}
        style={styles.postBtn} borderless
        rippleColor={theme.colors.tertiary + '33'}
      >
        <Ionicons name='image-outline'
          size={24} color={theme.colors.tertiary}
          style={styles.btnIcon}
        />
      </TouchableRipple>
      <TextInput
        style={styles.input}
        placeholder='Send Message..'
        placeholderTextColor={theme.colors.outline + 'bb'}
        selectionColor={theme.colors.secondary + '44'}
        autoCorrect={false} multiline
        onChangeText={setText}
        ref={inputRef}
      >
        <TokenizedText>{text}</TokenizedText>
      </TextInput>
      <TouchableRipple
        onPress={() => null}
        style={styles.postBtn} borderless
        rippleColor={theme.colors.secondary + '33'}
      >
        <FontAwesome name='send-o'
          size={22} color={theme.colors.secondary}
          style={styles.btnIcon}
        />
      </TouchableRipple>
    </View>
  )
}
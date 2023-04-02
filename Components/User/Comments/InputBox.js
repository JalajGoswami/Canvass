import { StyleSheet, View, TextInput, Dimensions } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TokenizedText from 'Components/Common/TokenizedText'
import { BodyFont } from 'theme/theme'
import { useRef, useEffect } from 'react'

export default function InputBox({ text, setText }) {
    const inputRef = useRef()
    const typing = useRef(false)
    const theme = useTheme()

    useEffect(() => {
        if (text.charAt(0) == '@' && !typing.current)
            inputRef.current?.focus()

        typing.current = false
    }, [text])

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

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Post a comment..'
                underlineStyle={{ height: 0 }}
                selectionColor={theme.colors.secondary + '33'}
                autoCorrect={false} multiline
                onChangeText={txt => {
                    typing.current = true
                    setText(txt)
                }}
                ref={inputRef}
            >
                <TokenizedText>{text}</TokenizedText>
            </TextInput>
            <TouchableRipple
                onPress={() => null}
                style={styles.postBtn} borderless
                rippleColor={theme.colors.secondary + '22'}
            >
                <FontAwesome name='send-o'
                    size={22} color={theme.colors.secondary}
                    style={styles.btnIcon}
                />
            </TouchableRipple>
        </View>
    )
}
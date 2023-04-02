import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import StyledText from './StyledText'

export default function TokenizedText({
    children, mentionStyle = {}, hashtagStyle = {}, ...props
}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        hashtag: {
            color: theme.colors.secondary
        },
        mention: {
            color: theme.colors.secondary
        }
    })

    let delimiter = /\s+/

    // split string
    let _text = children
    let token, index, parts = []
    while (_text) {
        delimiter.lastIndex = 0;
        token = delimiter.exec(_text)
        if (token === null) {
            break
        }
        index = token.index
        if (token[0].length === 0) {
            index = 1
        }
        parts.push(_text.substr(0, index))
        parts.push(token[0])
        index = index + token[0].length
        _text = _text.slice(index)
    }
    parts.push(_text)

    // highlight mention & hashtags
    parts = parts.map((text, i) => {
        if (/^@/.test(text))
            return (
                <StyledText key={i}
                    style={[styles.mention, mentionStyle]}
                >
                    {text}
                </StyledText>
            )
        if (/^#/.test(text))
            return (
                <StyledText key={i}
                    style={[styles.hashtag, hashtagStyle]}
                >
                    {text}
                </StyledText>
            )
        return text
    })

    return (
        <StyledText {...props}>
            {parts}
        </StyledText>
    )
}
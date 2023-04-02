import React, { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import StyledText from "./StyledText";
import TokenizedText from "./TokenizedText";

export default function TruncatedText({
    text, linesToTruncate, initiallyExpanded = false,
    onStateChange = () => null, style = {}, btnStyle = {},
    btnProps = {}, ...props
}) {
    const theme = useTheme()
    const [clippedText, setClippedText] = useState(false)
    const [more, setMore] = useState(initiallyExpanded)

    return clippedText ? (
        <TokenizedText style={style} {...props}>
            {!more ? `${clippedText}...` : text}
            <TouchableOpacity
                onPress={() => {
                    onStateChange(!more)
                    setMore(!more)
                }}
            >
                <StyledText
                    style={[
                        {
                            color: theme.colors.secondary,
                            transform: [{ translateY: 3 }]
                        },
                        !more ?
                            { lineHeight: 12 } :
                            { lineHeight: 14 }
                        , btnStyle
                    ]}
                    {...btnProps}
                >
                    {more ? ' less' : ' more'}
                </StyledText>
            </TouchableOpacity>
        </TokenizedText>
    ) : (
        <TokenizedText
            style={style} {...props}
            numberOfLines={linesToTruncate}
            ellipsizeMode={'tail'}
            onTextLayout={(event) => {
                //get all lines
                const { lines } = event.nativeEvent;

                //no truncation if text is shorter
                if (lines.length <= linesToTruncate)
                    return

                //get lines after it truncate
                let truncated = lines
                    .splice(0, linesToTruncate)
                    .map((line) => line.text)
                    .join('')

                setClippedText(truncated.substr(0, truncated.length - 10))
            }}>
            {text}
        </TokenizedText>
    )
}
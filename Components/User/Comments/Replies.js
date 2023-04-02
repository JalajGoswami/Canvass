import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TitleBar from './TitleBar'
import { TouchableRipple, useTheme } from 'react-native-paper'
import ActionButtons from './ActionButtons'
import TruncatedText from 'Components/Common/TrucatedText'
import OptionMenu from './OptionMenu'
import StyledText from 'Components/Common/StyledText'

const REPLIES = ['Lorem ipsum dolor Lorem ipsum dolor dolor Lorem ipsum dolor dolor',
    'Lorem ipsum dolor Lorem ipsum',
    'Lorem ipsum dolor Lorem ipsum dolor dolor Lorem ipsum dolor dolor'
]
export default function Replies() {
    const theme = useTheme()
    const [expanded, setExpanded] = useState(false)

    const styles = StyleSheet.create({
        wrapper: {
            paddingLeft: 30,
            paddingTop: 4,
        },
        expandBtn: {
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            paddingVertical: 1,
            borderRadius: 6,
        },
    })

    return (
        <View style={styles.wrapper}>
            {REPLIES.filter((_, i) => expanded || i < 1)
                .map((rep, i) => (
                    <Reply key={i} comment={rep} />
                ))
            }
            <TouchableRipple
                onPress={() => setExpanded(!expanded)}
                style={styles.expandBtn} borderless
            >
                <StyledText size={8} color='onSurface'>
                    {expanded ? 'Show less replies' : 'Show more replies'}
                </StyledText>
            </TouchableRipple>
        </View>
    )
}

export function Reply({ comment }) {
    const theme = useTheme()
    const [compact, setCompact] = useState(false)
    const [options, setOptions] = useState(false)

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.surface,
            flexDirection: compact ? 'column-reverse' : 'row',
            borderRadius: 16,
            marginVertical: 4,
        },
        content: {
            flex: compact ? 0 : 1,
            paddingBottom: compact ? 8 : 10,
        },
        txt: {
            marginRight: 14,
            marginLeft: compact ? 12 : 8,
        }
    })

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onLongPress={() => setOptions(true)}
        >
            <>
                <ActionButtons
                    compact={compact}
                />
                <View style={styles.content}>
                    <TitleBar
                        user='User Name'
                        compact={compact}
                    />
                    <TruncatedText
                        style={styles.txt}
                        text={comment}
                        linesToTruncate={3}
                        onLayout={({ nativeEvent: { layout } }) =>
                            setCompact(layout.height < 50)
                        }
                    />
                    <OptionMenu
                        options={options}
                        setOptions={setOptions}
                    />
                </View>
            </>
        </TouchableOpacity>
    )
}
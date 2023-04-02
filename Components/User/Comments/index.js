import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TitleBar from './TitleBar'
import { useTheme } from 'react-native-paper'
import ActionButtons from './ActionButtons'
import TruncatedText from 'Components/Common/TrucatedText'
import OptionMenu from './OptionMenu'
import Replies from './Replies'
import { memo } from 'react'

function Comment({ showReply, setText }) {
    const theme = useTheme()
    const [compact, setCompact] = useState(false)
    const [options, setOptions] = useState(false)

    const styles = StyleSheet.create({
        wrapper: {
            paddingLeft: 20,
            paddingRight: 10,
            marginVertical: 6,
        },
        container: {
            backgroundColor: theme.colors.surface,
            flexDirection: compact ? 'column-reverse' : 'row',
            borderRadius: 16,
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
        <View style={styles.wrapper}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.container}
                onLongPress={() => setOptions(true)}
            >
                <>
                    <ActionButtons
                        compact={compact}
                        setText={setText}
                    />
                    <View style={styles.content}>
                        <TitleBar
                            user='User Name'
                            compact={compact}
                        />
                        <TruncatedText
                            style={styles.txt}
                            text={'Lorem ipsum dolor Lorem ipsum dolor dolor Lorem ipsum dolor dolor'}
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
            {showReply &&
                <Replies />
            }
        </View>
    )
}

export default memo(Comment)
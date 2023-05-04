import { StyleSheet } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import Box from 'Components/Common/Box'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'react-native-paper'

export default function Message({ message, status }) {
    const theme = useTheme()
    const received = status == 'received'
    const seen = status == 'seen'

    const styles = StyleSheet.create({
        msg: {
            alignSelf: received ?
                'flex-start' : 'flex-end',
            paddingVertical: 8,
            paddingHorizontal: 15,
            maxWidth: '65%',
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'flex-end'
        },
        txt: {
            flexShrink: 1,
        },
        seenIcon: {
            flexShrink: 0,
            marginLeft: 'auto',
            color: theme.colors.secondary,
            transform: [{ translateX: 5 }]
        }
    })

    return (
        <Box
            style={styles.msg}
            variant={received ?
                'secondary' : 'primary'
            }
        >
            <StyledText
                style={styles.txt}
            >
                {message}
            </StyledText>
            {!received &&
                <Ionicons
                    style={styles.seenIcon}
                    size={seen ? 16 : 15}
                    name={
                        seen ?
                            'md-checkmark-done-circle'
                            : 'md-checkmark-done'
                    }
                />
            }
        </Box>
    )
}
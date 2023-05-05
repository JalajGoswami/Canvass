import { Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import Box from 'Components/Common/Box'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'react-native-paper'
import TokenizedText from 'Components/Common/TokenizedText'

export default function Message({ body, status, type }) {
    const theme = useTheme()
    const received = status === 'received'
    const seen = status === 'seen'
    const image = type === 'image'
    const contentWidth = (Dimensions.get('window').width - 30)
    const aspect_ratio = 1.503

    const styles = StyleSheet.create({
        msg: {
            alignSelf: received ?
                'flex-start' : 'flex-end',
            paddingVertical: image ? 3 : 8,
            paddingHorizontal: image ? 3 : 15,
            maxWidth: '65%',
            marginHorizontal: 10,
            marginVertical: 2,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'flex-end'
        },
        txt: {
            flexShrink: 1,
        },
        img: {
            width: contentWidth * 0.65,
            height: contentWidth * 0.65 / aspect_ratio,
            borderRadius: 10,
        },
        seenIcon: {
            flexShrink: 0,
            marginLeft: 'auto',
            color: theme.colors.secondary,
            transform: [{ translateX: 5 }],
            ...(image ? {
                position: 'absolute',
                right: 10,
                bottom: 5
            } : {})
        }
    })

    return (
        <Box
            style={styles.msg}
            variant={received ?
                'secondary' : 'primary'
            }
            shadow='low'
        >
            {image ?
                <Image
                    style={styles.img}
                    source={body}
                />
                :
                <TokenizedText
                    style={styles.txt}
                >
                    {body}
                </TokenizedText>
            }
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
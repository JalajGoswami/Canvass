import { Animated, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Box from 'Components/Common/Box'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableRipple, useTheme } from 'react-native-paper'
import TokenizedText from 'Components/Common/TokenizedText'
import OptionMenu from './OptionMenu'

const AnimateTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default function Message({
    body, status, type, lastItem, scrollToEnd
}) {
    const theme = useTheme()
    const [showOptions, setShowOptions] = useState(false)
    const [saved, setSaved] = useState(false)
    const translateY = useRef(new Animated.Value(10)).current
    const opacity = useRef(new Animated.Value(0)).current
    const received = status === 'received'
    const seen = status === 'seen'
    const text = type === 'text'
    const image = type === 'image'
    const post = type === 'post'
    const contentWidth = (Dimensions.get('window').width - 30)
    const aspect_ratio = 1.503

    const styles = StyleSheet.create({
        msgContainer: {
            alignSelf: received ?
                'flex-start' : 'flex-end',
            flexDirection: received ? 'row' : 'row-reverse',
            transform: [{ translateY: lastItem ? translateY : 0 }],
            opacity: lastItem ? opacity : 1
        },
        msg: {
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
        },
        optionAnchor: {
            opacity: 0,
            transform: [{ translateX: received ? -75 : 25 }]
        },
        saveBtn: {
            width: 35,
            height: 35,
            borderRadius: 20,
            alignSelf: 'center',
            alignItems: 'center'
        }
    })

    useEffect(() => {
        if (lastItem) {
            scrollToEnd()
            Animated.parallel(
                [Animated.timing(translateY, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                })]
            ).start()
        }
    }, [])

    return (
        <AnimateTouchableOpacity
            activeOpacity={0.75}
            style={styles.msgContainer}
            onLongPress={() => setShowOptions(true)}
        >
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
            <OptionMenu
                isText={text} style={styles.optionAnchor}
                setShowOptions={setShowOptions}
                showOptions={showOptions}
            />
            {post &&
                <TouchableRipple
                    style={styles.saveBtn} borderless
                    onPress={() => setSaved(s => !s)}
                    rippleColor={theme.colors.primary + '55'}
                >
                    <Ionicons
                        name={saved ? 'download' : 'download-outline'}
                        size={25}
                        color={theme.colors[saved
                            ? 'primary' : 'primary'
                        ]}
                        style={{ transform: [{ translateY: 1.5 }] }}
                    />
                </TouchableRipple>
            }
        </AnimateTouchableOpacity>
    )
}
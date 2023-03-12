import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import StyledText from '../Common/StyledText'
import { IconButton, TouchableRipple, useTheme } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import TruncatedText from '../Common/TrucatedText'
import { DisplayFont } from '../../theme/theme'
import { memo } from 'react'

function UserPost({ item: {
    user, text, image, aspect_ratio = 1,
    likes, dislikes, comments
} }) {
    const theme = useTheme()
    const [compact, setCompact] = useState(false)
    const [contentWidth, setContentWidth] = useState(320)

    const styles = StyleSheet.create({
        postContainer: {
            marginVertical: 6,
        },
        titleBar: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: theme.colors.surface,
            borderBottomWidth: 0.5,
        },
        userImg: {
            width: 24,
            height: 24,
            borderRadius: 12,
            marginHorizontal: 6,
        },
        optionsBtn: {
            marginLeft: 'auto',
            marginVertical: 0,
        },
        mainContainer: {
            flexDirection: compact ? 'column' : 'row',
        },
        content: {
            flex: 1,
            paddingHorizontal: 6,
            paddingTop: 4,
        },
        contentImg: {
            width: '100%',
            height: (Math.round(contentWidth - 12) / aspect_ratio),
            marginTop: 6,
            resizeMode: 'contain',
            borderRadius: 4,
        },
        actions: {
            flexDirection: compact ? 'row' : 'column',
            alignItems: 'center',
            marginRight: 4,
            marginLeft: compact ? 6 : 0,
        },
        actionBtn: {
            marginHorizontal: 0,
            marginVertical: 0,
            padding: 6,
            borderRadius: 15,
        },
        statusBar: {
            flexDirection: 'row',
            paddingHorizontal: 6,
            marginVertical: 2,
        },
        counts: {
            fontSize: 10,
            color: theme.colors.onSurfaceVariant,
            fontFamily: DisplayFont,
            marginRight: 6,
        },
    })
    function ActionBtn({ children, onPress = () => null }) {
        return (
            <TouchableRipple borderless
                rippleColor={theme.colors.primary + '22'}
                style={styles.actionBtn}
                onPress={onPress}
            >
                {children}
            </TouchableRipple>
        )
    }
    const fontFactor = compact ? 1.1 : 1

    return (
        <View style={styles.postContainer}>
            <View style={styles.titleBar}>
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={styles.userImg} resizeMode='cover'
                />
                <StyledText>{user}</StyledText>
                <IconButton icon='dots-vertical'
                    style={styles.optionsBtn}
                    size={18} onPress={() => null}
                />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.content}
                    onLayout={({ nativeEvent: { layout } }) =>
                        setContentWidth(layout.width)
                    }
                >
                    <View>
                        {image ?
                            <TruncatedText
                                text={text} linesToTruncate={4}
                            />
                            :
                            <TruncatedText
                                text={text} linesToTruncate={7}
                                onLayout={({ nativeEvent: { layout } }) =>
                                    setCompact(layout.height < 120)
                                }
                            />
                        }
                    </View>
                    {image &&
                        <Image source={image}
                            style={styles.contentImg}
                        />
                    }
                </View>
                <View style={styles.actions}>
                    <ActionBtn>
                        <AntDesign
                            name='like2' size={18 * fontFactor}
                            color={theme.colors.primary}
                        />
                    </ActionBtn>
                    <ActionBtn>
                        <AntDesign
                            name='dislike2' size={18 * fontFactor}
                            color={theme.colors.primary}
                        />
                    </ActionBtn>
                    <ActionBtn>
                        <MaterialCommunityIcons
                            name='comment-outline' size={17.5 * fontFactor}
                            color={theme.colors.primary}
                        />
                    </ActionBtn>
                    <ActionBtn>
                        <MaterialIcons
                            name='save-alt' size={18.5 * fontFactor}
                            color={theme.colors.primary}
                        />
                    </ActionBtn>
                    <ActionBtn>
                        <Feather
                            name='share' size={17.5 * fontFactor}
                            color={theme.colors.primary}
                        />
                    </ActionBtn>
                </View>
            </View>
            <View style={styles.statusBar}>
                <StyledText style={styles.counts}>{likes} Likes</StyledText>
                <StyledText style={styles.counts}>{dislikes} Dislikes</StyledText>
                <StyledText style={styles.counts}>{comments} Comments</StyledText>
            </View>
        </View>
    )
}
export default memo(UserPost)
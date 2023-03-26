import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'
import TruncatedText from 'Components/Common/TrucatedText'
import { DisplayFont } from 'theme/theme'
import { memo } from 'react'
import TitleBar from './TitleBar'
import ActionButtons from './ActionButtons'

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


    return (
        <View style={styles.postContainer}>

            <TitleBar user={user} />

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

                <ActionButtons compact={compact} />

            </View>

            <View style={styles.statusBar}>
                <StyledText style={styles.counts}>
                    {likes} Likes
                </StyledText>
                <StyledText style={styles.counts}>
                    {dislikes} Dislikes
                </StyledText>
                <StyledText style={styles.counts}>
                    {comments} Comments
                </StyledText>
            </View>
        </View>
    )
}
export default memo(UserPost)
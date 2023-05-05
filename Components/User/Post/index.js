import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'
import TruncatedText from 'Components/Common/TrucatedText'
import { DisplayFont } from 'theme/theme'
import { memo } from 'react'
import TitleBar from './TitleBar'
import ActionButtons from './ActionButtons'
import { SharedElement } from 'react-navigation-shared-element'

function Post({ post, postState }) {
    const {
        id, user, text, image, aspect_ratio = 1,
        likes, dislikes, comments
    } = post
    const { initiallyExpanded = false } = postState ?? {}

    const theme = useTheme()
    const contentWidth = Dimensions.get('window').width - 16
    const [textExpanded, setTextExpanded] = useState(initiallyExpanded)

    const styles = StyleSheet.create({
        postContainer: {
            marginVertical: 8,
        },
        mainContainer: {
            flexDirection:  'column',
        },
        content: {
            flex: 0,
            paddingHorizontal: 8,
            paddingTop: 4,
        },
        contentImg: {
            width: '100%',
            height: (contentWidth / aspect_ratio),
            marginTop: 6,
            resizeMode: 'contain',
            borderRadius: 4,
        },
        statusBar: {
            flexDirection: 'row',
            paddingHorizontal: 8,
            marginVertical: 2,
        },
        counts: {
            fontSize: 10,
            color: theme.colors.onSurfaceVariant,
            fontFamily: DisplayFont,
            marginLeft: 6,
            marginRight: 1,
        },
    })

    const formattedText = image ?
        <TruncatedText
            text={text} linesToTruncate={4}
            initiallyExpanded={initiallyExpanded}
            onStateChange={setTextExpanded}
        />
        :
        <TruncatedText
            text={text} linesToTruncate={7}
            initiallyExpanded={initiallyExpanded}
            onStateChange={setTextExpanded}
        />

    return (
        <SharedElement id={`post.${id}`}>
            <View style={styles.postContainer}>
                <TitleBar user={user} />
                <View style={styles.mainContainer}>
                    <View style={styles.content}>
                        <View>{formattedText}</View>
                        {image &&
                            <Image source={image}
                                style={styles.contentImg}
                            />
                        }
                    </View>
                    <ActionButtons
                        post={post}
                        textExpanded={textExpanded}
                    />
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
        </SharedElement>
    )
}

export default memo(Post)
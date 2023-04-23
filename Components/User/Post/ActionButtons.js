import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function ActionButtons({
    post, compact, postWidth, textExpanded
}) {
    const theme = useTheme()
    const { navigate } = useNavigation()
    const route = useRoute()
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const CommentRoute = route.name.split('/')
    CommentRoute.pop()
    CommentRoute.push('Comments')

    const styles = StyleSheet.create({
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
    })

    function ActionBtn({
        children, rippleColor, onPress = () => null
    }) {
        return (
            <TouchableRipple borderless
                rippleColor={rippleColor || theme.colors.primary + '22'}
                style={styles.actionBtn}
                onPress={onPress}

            >
                {children}
            </TouchableRipple>
        )
    }

    const fontFactor = compact ? 1.1 : 1

    return (
        <View style={styles.actions}>
            <ActionBtn
                rippleColor={theme.colors.secondary + '33'}
                onPress={() => setLiked(!liked)}
            >
                <AntDesign
                    name={liked ? 'like1' : 'like2'}
                    size={18 * fontFactor}
                    color={theme.colors[liked ? 'secondary' : 'primary']}
                />
            </ActionBtn>
            <ActionBtn
                rippleColor={theme.colors.tertiary + '33'}
                onPress={() => setDisliked(!disliked)}
            >
                <AntDesign
                    name={disliked ? 'dislike1' : 'dislike2'}
                    size={18 * fontFactor}
                    color={theme.colors[disliked ? 'tertiary' : 'primary']}
                />
            </ActionBtn>
            <ActionBtn
                onPress={() =>
                    navigate(CommentRoute.join('/'), {
                        post,
                        postState: {
                            postWidth: postWidth,
                            initiallyExpanded: textExpanded
                        }
                    })
                }
            >
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
    )
}
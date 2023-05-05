import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function ActionButtons({
    post, postWidth, textExpanded
}) {
    const theme = useTheme()
    const { navigate } = useNavigation()
    const route = useRoute()
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [saved, setSaved] = useState(false)
    const CommentRoute = route.name.split('/')
    CommentRoute.pop()
    CommentRoute.push('Comments')

    const styles = StyleSheet.create({
        actions: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 6,
            marginTop: 2,
        },
        actionBtn: {
            marginRight: 2,
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
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

    return (
        <View style={styles.actions}>
            <ActionBtn
                rippleColor={theme.colors.secondary + '33'}
                onPress={() => setLiked(!liked)}
            >
                <AntDesign
                    name={liked ? 'like1' : 'like2'}
                    size={22}
                    color={theme.colors[liked ? 'secondary' : 'primary']}
                />
            </ActionBtn>
            <ActionBtn
                rippleColor={theme.colors.tertiary + '33'}
                onPress={() => setDisliked(!disliked)}
            >
                <AntDesign
                    name={disliked ? 'dislike1' : 'dislike2'}
                    size={22}
                    color={theme.colors[disliked ? 'tertiary' : 'primary']}
                    style={{ transform: [{ translateY: 1.2 }] }}
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
                    name='comment-outline' size={21}
                    color={theme.colors.primary}
                    style={{ transform: [{ translateY: 0.8 }] }}
                />
            </ActionBtn>
            <ActionBtn
                rippleColor={theme.colors.primary + '33'}
                onPress={() => setSaved(!saved)}
            >
                <Ionicons
                    name={saved ? 'download' : 'download-outline'}
                    size={24}
                    color={theme.colors[saved
                        ? 'primary' : 'primary'
                    ]}
                    style={{ transform: [{ translateY: -1 }] }}
                />
            </ActionBtn>
            <ActionBtn>
                <Feather
                    name='share' size={21}
                    color={theme.colors.primary}
                    style={{ transform: [{ translateY: -0.5 }] }}
                />
            </ActionBtn>
        </View>
    )
}
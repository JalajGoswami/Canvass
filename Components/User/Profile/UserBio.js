import { View, StyleSheet, Linking } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import TokenizedText from 'Components/Common/TokenizedText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'

export default function UserBio() {
    const theme = useTheme()
    const { user } = useSelector(state => state.user)
    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            alignItems: 'center',
        },
        usrname: {
            marginBottom: 5,
            textAlign: 'center'
        },
        bio: {
            textAlign: 'center',
            marginVertical: 5,
            width: '80%',
        },
        urlContainer: {
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center',
        },
        urlIcon: {
            textAlignVertical: 'center',
            marginRight: 2,
            color: theme.colors.secondary
        },
        url: {
            flexGrow: 1,
            flexShrink: 1,
            color: theme.colors.secondary
        }
    })

    async function openUrl() {
        try {
            await Linking.openURL(user.website)
        } catch { }
    }

    let previewUrl = user.website || ""
    previewUrl = previewUrl.startsWith('https') ?
        previewUrl.slice(8) : previewUrl
    previewUrl = previewUrl.startsWith('www') ?
        previewUrl.slice(4) : previewUrl

    return (
        <View style={styles.container}>
            <StyledText variant='title'
                color='onSurfaceVariant'
                style={styles.usrname}
            >
                {user.user_name}
            </StyledText>
            <StyledText
                variant='title' size={12}
                style={styles.usrname}
            >
                {user.full_name}
            </StyledText>
            {user.about &&
                <TokenizedText style={styles.bio}>
                    {user.about}
                </TokenizedText>
            }
            {previewUrl &&
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.urlContainer}
                    onPress={openUrl}
                >
                    <MaterialCommunityIcons
                        name='link-variant'
                        size={15} style={styles.urlIcon}
                    />
                    <StyledText style={styles.url}
                        numberOfLines={1}
                    >
                        {previewUrl}
                    </StyledText>
                </TouchableOpacity>
            }
        </View>
    )
}
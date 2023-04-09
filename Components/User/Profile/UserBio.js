import { View, StyleSheet, Linking } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import TokenizedText from 'Components/Common/TokenizedText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'

const websiteUrl = 'https://www.linkedin.com/in/jalaj-goswami-87637b220/'

export default function UserBio() {
    const theme = useTheme()
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
            await Linking.openURL(websiteUrl)
        } catch {}
    }

    const previewUrl = websiteUrl.startsWith('https') ?
        websiteUrl.slice(8) : websiteUrl

    return (
        <View style={styles.container}>
            <StyledText variant='title'
                color='onSurfaceVariant'
                style={styles.usrname}
            >
                jalaj_goswami
            </StyledText>
            <StyledText
                variant='title' size={12}
                style={styles.usrname}
            >
                Jalaj Goswami
            </StyledText>
            <TokenizedText style={styles.bio}>
                {'Student of Computer Science Engg.\n#Autofreak #GearHead\nCheck my Linkedin 👇'}
            </TokenizedText>
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
        </View>
    )
}
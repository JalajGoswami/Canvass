import { Image, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import OptionMenu from './OptionMenu'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TokenizedText from 'Components/Common/TokenizedText'

export default function Notification({ notification }) {
    const { content, user, profile_pic, thumbnail } = notification
    const [options, setOptions] = useState(false)

    const styles = StyleSheet.create({
        wrapper: {
            marginVertical: 10
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        userImg: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
        },
        text: {
            flexWrap: 'wrap',
            flexShrink: 1,
            flexGrow: 1
        },
        tumbnail: {
            width: 40,
            height: 40,
            flexShrink: 0,
        }
    })
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.8}
                onLongPress={() => setOptions(true)}
            >
                <Image
                    source={profile_pic}
                    style={styles.userImg} resizeMode='cover'
                />
                <TokenizedText
                    style={styles.text}
                >
                    {content}
                </TokenizedText>
                {thumbnail &&
                    <Image
                        source={thumbnail}
                        style={styles.tumbnail}
                        resizeMode='cover'
                    />
                }
            </TouchableOpacity>
            <OptionMenu
                options={options}
                setOptions={setOptions}
                user={user}
            />
        </View>
    )
}
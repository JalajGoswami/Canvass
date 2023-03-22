import StyledText from 'Components/Common/StyledText'
import { Image, StyleSheet, View } from 'react-native'
import { IconButton, useTheme } from 'react-native-paper'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function SearchItem({
    item_type, withDelete = false
}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: withDelete ? 10 : 12,
            borderBottomColor: theme.colors.surface,
            borderBottomWidth: 0.5,
        },
        userImg: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 16,
        },
        tagIcon: {
            width: 40,
            height: 40,
            textAlign: 'center',
            textAlignVertical: 'center',
            marginRight: 16,
        },
        closeBtn: {
            marginLeft: 'auto',
            marginVertical: 0,
        },
    })

    return (
        <View style={styles.container}>
            {item_type == 'account' ?
                <>
                    <Image
                        source={require('assets/images/profile.png')}
                        style={styles.userImg} resizeMode='cover'
                    />
                    <View>
                        <StyledText>
                            jalaj_goswami
                        </StyledText>
                        <StyledText
                            size={6} variant='title'
                            color='onSurfaceVariant'
                        >
                            Jalaj Goswami
                        </StyledText>
                    </View>
                    {withDelete &&
                        <IconButton
                            style={styles.closeBtn}
                            icon='close' size={15}
                            onPress={() => null}
                        />
                    }
                </>
                :
                <>
                    <Fontisto name='hashtag'
                        size={25} style={styles.tagIcon}
                        color={theme.colors.onSurfaceVariant}
                    />
                    <View>
                        <StyledText>
                            Cars
                        </StyledText>
                        <StyledText
                            size={5} variant='title'
                            color='onSurfaceVariant'
                        >
                            12K Posts
                        </StyledText>
                    </View>
                    {withDelete &&
                        <IconButton
                            style={styles.closeBtn}
                            icon='close' size={15}
                            onPress={() => null}
                        />
                    }
                </>
            }
        </View>
    )
}
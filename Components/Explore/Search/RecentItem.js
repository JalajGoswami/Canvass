import StyledText from 'Components/Common/StyledText'
import { Image, StyleSheet, View } from 'react-native'
import { IconButton, useTheme } from 'react-native-paper'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function RecentItem({ item_type }) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderBottomColor: theme.colors.surface,
            borderBottomWidth: 0.5,
        },
        userImg: {
            width: 36,
            height: 36,
            borderRadius: 18,
            marginRight: 8,
        },
        tagIcon: {
            width: 36,
            height: 36,
            textAlign: 'center',
            textAlignVertical: 'center',
            marginRight: 8,
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
                    <IconButton
                        style={styles.closeBtn}
                        icon='close' size={15}
                        onPress={() => null}
                    />
                </>
                :
                <>
                    <Fontisto name='hashtag'
                        size={25} style={styles.tagIcon}
                        color={theme.colors.onSurfaceVariant}
                    />
                    <StyledText>
                        Cars
                    </StyledText>
                    <IconButton
                        style={styles.closeBtn}
                        icon='close' size={15}
                        onPress={() => null}
                    />
                </>
            }
        </View>
    )
}
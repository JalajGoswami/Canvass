import StyledText from 'Components/Common/StyledText'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableRipple, useTheme } from 'react-native-paper'
import RecentItem from './RecentItem'

export default function Recents() {
    const [show, setShow] = useState(true)
    const theme = useTheme()

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 6,
            paddingHorizontal: 10,
        },
        toggleBtn: {
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 10,
        },
    })
    return (
        <View>
            <View style={styles.row}>
                <StyledText
                    size={9}
                    variant='title'
                >
                    Recents
                </StyledText>
                <TouchableRipple
                    borderless
                    style={styles.toggleBtn}
                    rippleColor={theme.colors.secondary + '11'}
                    onPress={() => setShow(!show)}
                >
                    <StyledText color='secondary'>
                        {show ? 'Hide' : 'Show'}
                    </StyledText>
                </TouchableRipple>
            </View>
            <FlatList
                data={['account', 'tags', 'tags', 'account']}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) =>
                    <RecentItem item_type={item} />
                }
            />
        </View>
    )
}
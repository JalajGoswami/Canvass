import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, useTheme } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingTags } from 'store/slices/tag'
import ContentLoader, { Rect } from 'react-content-loader/native'

export default function TrendingTopics() {
    const [topic, setTopic] = useState('All')
    const { trendingTags } = useSelector(state => state.tag)
    const dispatch = useDispatch()
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            flexGrow: 0,
            marginVertical: 2,
        },
        topicBtn: {
            marginVertical: 4,
            marginHorizontal: 2.5,
            minWidth: 40,
            justifyContent: 'center',
        },
        topicBtnTxt: {
            marginVertical: 0,
            marginHorizontal: 10,
            fontSize: 12,
            fontWeight: 'bold'
        }
    })

    function Skeleton() {
        return (
            <ContentLoader
                animate={true} height={26} speed={0.8}
                backgroundColor={theme.colors.surface}
                foregroundColor={theme.colors.surfaceVariant}
            >
                <Rect x="5" y="0" rx="8" ry="8" width="40" height="22" />
                <Rect x="55" y="0" rx="8" ry="8" width="60" height="22" />
                <Rect x="125" y="0" rx="8" ry="8" width="50" height="22" />
                <Rect x="185" y="0" rx="8" ry="8" width="40" height="22" />
                <Rect x="235" y="0" rx="8" ry="8" width="80" height="22" />
            </ContentLoader>
        )
    }

    function TopicBtn({ name }) {
        const active = topic == name
        return (
            <Button mode={active ? 'contained' : 'outlined'}
                textColor={theme.colors[active ?
                    'background' : 'onBackground']}
                buttonColor={theme.colors[active ?
                    'onBackground' : 'background']}
                style={styles.topicBtn}
                labelStyle={styles.topicBtnTxt}
                contentStyle={{ height: 25 }}
                onPress={() => setTopic(name)}
            >
                {name}
            </Button>
        )
    }

    useEffect(() => { dispatch(getTrendingTags()) }, [])

    return (
        <ScrollView style={styles.container} horizontal
            contentContainerStyle={{ paddingHorizontal: 2 }}
        >
            {trendingTags ?
                <>
                    <TopicBtn name='All' />
                    {trendingTags.map(t => (
                        <TopicBtn key={t.id} name={t.name} />
                    ))}
                </>
                :
                <View style={{ width: 320, marginVertical: 4 }}>
                    <Skeleton />
                </View>
            }
        </ScrollView>
    )
}
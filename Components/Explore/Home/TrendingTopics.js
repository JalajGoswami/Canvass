import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, useTheme } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingTags } from 'store/slices/tag'

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
            <TopicBtn name='All' />
            {trendingTags?.map(t => (
                <TopicBtn key={t.id} name={t.name} />
            ))}
        </ScrollView>
    )
}
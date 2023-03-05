import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button, useTheme } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

export default function TrendingTopics() {
    const [topic, setTopic] = useState('All')
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            flexGrow: 0,
        },
        topicBtn: {
            marginVertical: 4,
            marginHorizontal: 2,
            minWidth: 40,
        },
        topicBtnTxt: {
            marginVertical: 2,
            marginHorizontal: 8,
            fontSize: 12,
            fontWeight: 'bold',
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
                labelStyle={styles.topicBtnTxt}
                style={styles.topicBtn}
                onPress={() => setTopic(name)}
            >
                {name}
            </Button>
        )
    }
    const topicList = ['Movies', 'Science', 'Gaming', 'Adventure', 'Cars']
    return (
        <ScrollView style={styles.container} horizontal
            contentContainerStyle={{ paddingHorizontal: 2 }}
        >
            <TopicBtn name='All' />
            {topicList.map(t => (
                <TopicBtn key={t} name={t} />
            ))}
        </ScrollView>
    )
}
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
        }
    })
    return (
        <ScrollView style={styles.container} horizontal>
            <Button mode={topic == 'All' ? 'contained' : 'outlined'}
                textColor={theme.colors[topic == 'All' ? 'background' : 'onBackground']}
                buttonColor={theme.colors[topic == 'All' ? 'onBackground' : 'background']}
            >
                All
            </Button>
            <Button mode={topic == 'movie' ? 'contained' : 'outlined'}
                textColor={theme.colors[topic == 'movie' ? 'background' : 'onBackground']}
                buttonColor={theme.colors[topic == 'movie' ? 'onBackground' : 'background']}
            >
                Movies & Series
            </Button>
        </ScrollView>
    )
}
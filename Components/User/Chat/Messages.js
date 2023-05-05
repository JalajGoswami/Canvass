import { SectionList, View } from 'react-native'
import React from 'react'
import SectionHeader from './SectionHeader'
import Message from './Message'

const DATA = [
    {
        time: 'Yesterday 10:12pm',
        data: [
            { body: 'Some text msg', status: 'seen' },
            { body: 'Some text msg', status: 'received' },
            { body: 'Some very very very very very very long text msg', status: 'seen' },
        ]
    },
    {
        time: 'Today 4:50pm',
        data: [
            { body: 'Some very very very very very very long text msg', status: 'received' },
            { body: 'Some normally long msg', status: 'seen' },
            { body: 'Some random msg', status: 'sent' },
            { body: 'Some text msg', status: 'sent' },
            { type: 'image', body: require('assets/images/categories/cars.webp'), status: 'received' },
        ]
    },
    {
        time: 'Today 5:20pm',
        data: [
            { body: 'Some very very very very very very long text msg', status: 'received' },
            { body: 'Some normally long text msg', status: 'seen' },
            { body: 'Some text msg', status: 'sent' },
            { body: 'Some #random msg', status: 'sent' },
            { body: 'Some text msg', status: 'received' },
        ]
    }
]

export default function Messages() {
    return (
        <SectionList
            sections={DATA}
            keyExtractor={(_, i) => i.toString()}
            renderSectionHeader={({ section }) =>
                <SectionHeader title={section.time} />
            }
            renderItem={({ item }) =>
                <Message {...item} />
            }
            ItemSeparatorComponent={({ leadingItem, trailingItem }) => (
                leadingItem.status === 'received' &&
                trailingItem.status !== 'received' &&
                <View style={{ height: 5 }} />
            )}
            contentContainerStyle={{ paddingBottom: 15 }}
            onLayout={({ target }) =>
                target.scrollToEnd()
            }
        />
    )
}

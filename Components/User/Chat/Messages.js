import { SectionList, View } from 'react-native'
import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
import Message from './Message'

const DATA = [
    {
        time: 'Yesterday 10:12pm',
        data: [
            { type: 'text', body: 'Some text msg', status: 'seen' },
            { type: 'text', body: 'Some text msg', status: 'received' },
            { type: 'text', body: 'Some very very very very very very long text msg', status: 'seen' },
        ]
    },
    {
        time: 'Today 4:50pm',
        data: [
            { type: 'text', body: 'Some very very very very very very long text msg', status: 'received' },
            { type: 'text', body: 'Some normally long msg', status: 'seen' },
            { type: 'text', body: 'Some random msg', status: 'sent' },
            { type: 'text', body: 'Some text msg', status: 'sent' },
            { type: 'image', body: require('assets/images/categories/cars.webp'), status: 'received' },
        ]
    },
    {
        time: 'Today 5:20pm',
        data: [
            { type: 'text', body: 'Some very very very very very very long text msg', status: 'received' },
            { type: 'post', body: 'Some normally long text msg', status: 'seen' },
            { type: 'post', body: 'Some text msg', status: 'sent' },
            { type: 'text', body: 'Some #random msg', status: 'sent' },
            { type: 'text', body: 'Some text msg', status: 'received' },
        ]
    }
]

export default function Messages() {
    const listRef = useRef()

    const scrollToEnd = (target) =>
        (target ?? listRef.current).scrollToEnd()

    return (
        <SectionList
            sections={DATA}
            keyExtractor={(_, i) => i.toString()}
            renderSectionHeader={({ section }) =>
                <SectionHeader title={section.time} />
            }
            renderItem={({ item, index, section }) =>
                <Message {...item}
                    lastItem={
                        section.time == DATA[DATA.length - 1].time
                        && index == section.data.length - 1
                    }
                    scrollToEnd={scrollToEnd}
                />
            }
            ItemSeparatorComponent={({ leadingItem, trailingItem }) => (
                leadingItem.status !== trailingItem?.status &&
                [leadingItem.status, trailingItem?.status].includes('received')
                && <View style={{ height: 5 }} />
            )}
            contentContainerStyle={{ paddingBottom: 15 }}
            onLayout={({ target }) => {
                listRef.current = target
                scrollToEnd(target)
            }}
        />
    )
}

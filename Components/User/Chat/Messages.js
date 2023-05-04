import { SectionList } from 'react-native'
import React from 'react'
import SectionHeader from './SectionHeader'
import Message from './Message'

const DATA = [
    {
        time: 'Yesterday 10:12pm',
        data: [
            { message: 'Some text msg', status: 'seen' },
            { message: 'Some text msg', status: 'received' },
            { message: 'Some very very very very very very long text msg', status: 'seen' },
        ]
    },
    {
        time: 'Today 4:50pm',
        data: [
            { message: 'Some very very very very very very long text msg', status: 'received' },
            { message: 'Some text msg', status: 'sent' },
            { message: 'Some text msg', status: 'sent' },
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
        />
    )
}

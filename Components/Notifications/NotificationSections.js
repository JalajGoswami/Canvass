import { SectionList, StyleSheet, View } from 'react-native'
import React from 'react'
import Notification from './Notification'
import SectionHeader from 'Components/Common/SectionHeader'

const SECTIONS = ['New', 'Today', 'This Week', 'Older']

export default function NotificationSections({ notifications }) {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 2,
            paddingHorizontal: 10,
        },
    })
    const sections = SECTIONS.map(s =>
        ({ title: s, data: notifications })
    )

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                contentContainerStyle={{ paddingBottom: 120 }}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) =>
                    <Notification notification={item} />
                }
                renderSectionHeader={({ section: { title, data } }) =>
                    data.length ?
                        <SectionHeader title={title}
                            style={{ marginTop: 5 }}
                        />
                        : <></>
                }
            />
        </View>
    )
}


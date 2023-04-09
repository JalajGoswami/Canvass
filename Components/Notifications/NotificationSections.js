import { SectionList, StyleSheet, View } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import { useTheme } from 'react-native-paper'
import Notification from './Notification'

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
                        <SectionHeader title={title} />
                        : <></>
                }
            />
        </View>
    )
}


function SectionHeader({ title }) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        titleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
        },
        line: {
            backgroundColor: theme.colors.surfaceVariant,
            height: 0.75,
            flexGrow: 1,
            transform: [{ translateY: 1 }]
        },
        title: {
            paddingHorizontal: 8,
        }
    })
    return (
        <View style={styles.titleContainer}>
            <View style={styles.line} />
            <StyledText style={styles.title} color='outline'>
                {title}
            </StyledText>
            <View style={styles.line} />
        </View>
    )
}

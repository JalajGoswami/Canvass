import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import SearchItem from './SearchItem'

export default function SearchSuggestion() {
    return (
        <FlatList
            contentContainerStyle={{ paddingVertical: 6 }}
            data={['account', 'tags', 'tags', 'account', 'account', 'tags', 'tags', 'account', 'account', 'tags', 'tags' ]}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) =>
                <SearchItem item_type={item} />
            }
        />
    )
}
import SearchItem from './SearchItem'
import { FlatList } from 'react-native-gesture-handler'

export default function ResultTab({ route }) {
    const data = ['account', 'tag', 'tag', 'account', 'account', 'tag', 'tag', 'account', 'account', 'tag', 'tag']

    const tab = route.name?.split('/').pop().toLowerCase()

    const filterFunc = item => (tab == 'all' || tab.includes(item))

    return (
        <FlatList
            contentContainerStyle={{ paddingTop: 6, paddingBottom: 10 }}
            data={data.filter(filterFunc)}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) =>
                <SearchItem item_type={item} />
            }
        />
    )
}
import { useState, useRef } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import StyledBody from 'Components/Common/StyledBody'
import EndReached from 'Components/Explore/Home/EndReached'
import PostsSkeleton from 'Components/Explore/Home/PostsSkeleton'
import TopBar from 'Components/Explore/Home/TopBar'
import TrendingTopics from 'Components/Explore/Home/TrendingTopics'
import Post from 'Components/User/Post'

const baseUrl = 'assets/images/categories/'
const POSTS = [
    {
        user: 'First User',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elaboris nisi ut aliquip ex ea commodo consequat.',
        likes: 45,
        dislikes: 15,
        comments: 21
    },
    {
        user: 'Second User',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require(baseUrl + 'science-cosmos.webp'),
        aspect_ratio: 1.6,
        likes: 52,
        dislikes: 19,
        comments: 28
    },
    {
        user: 'Third User',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: require(baseUrl + 'art-illustration.webp'),
        aspect_ratio: 1.332,
        likes: 68,
        dislikes: 7,
        dislikes: 36
    },
];

export default function Explore() {
    const [posts, setPosts] = useState(POSTS)
    const [refreshing, setRefreshing] = useState(false)
    const [pages, setPages] = useState({ current: 1, last: 3 })
    const listRef = useRef()
    const theme = useTheme()

    function fetchMorePosts() {
        if (pages.current >= pages.last)
            return;
        setTimeout(() => {
            setPosts(prev => prev.concat(POSTS))
            setPages(prev => ({ ...prev, current: prev.current + 1 }))
        }, 3000)
    }

    function refreshPosts() {
        setRefreshing(true)
        setTimeout(() => setRefreshing(false), 3000)
    }

    function gotoTop() {
        listRef.current.scrollToIndex({ index: 0 })
    }

    return (
        <StyledBody>
            <TopBar />
            <TrendingTopics />
            <FlatList
                ref={listRef}
                data={posts}
                refreshControl={
                    <RefreshControl
                        onRefresh={refreshPosts}
                        refreshing={refreshing}
                        colors={[theme.colors.secondary, theme.colors.primary, theme.colors.error]}
                        progressBackgroundColor={theme.colors.surface}
                    />
                }
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) =>
                    <Post post={{ id: index, ...item }} />
                }
                ListFooterComponent={
                    pages.current >= pages.last ?
                        <EndReached gotoTop={gotoTop} />
                        : <PostsSkeleton />
                }
                onEndReached={fetchMorePosts}
                onEndReachedThreshold={1}
            />
        </StyledBody>
    )
}
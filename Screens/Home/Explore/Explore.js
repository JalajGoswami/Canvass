import { useRef, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import StyledBody from 'Components/Common/StyledBody'
import EndReached from 'Components/Explore/Home/EndReached'
import PostsSkeleton from 'Components/Explore/Home/PostsSkeleton'
import TopBar from 'Components/Explore/Home/TopBar'
import TrendingTopics from 'Components/Explore/Home/TrendingTopics'
import Post from 'Components/User/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPosts, refreshFeedPosts } from 'store/slices/post'

export default function Explore() {
    const { feedPosts, pages: { feed: pages }, loading
    } = useSelector(state => state.post)
    const dispatch = useDispatch()
    const listRef = useRef()
    const theme = useTheme()

    useEffect(refreshPosts, [])

    function fetchMorePosts() {
        pages.current < pages.total &&
            dispatch(getFeedPosts(pages.current + 1))
    }

    function refreshPosts() {
        dispatch(refreshFeedPosts())
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
                data={feedPosts}
                refreshControl={
                    <RefreshControl
                        onRefresh={refreshPosts}
                        refreshing={loading}
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
                    (pages.total && pages.current >= pages.total) ?
                        <EndReached gotoTop={gotoTop} />
                        : <PostsSkeleton />
                }
                onEndReached={fetchMorePosts}
                onEndReachedThreshold={1}
            />
        </StyledBody>
    )
}
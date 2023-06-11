import { View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Post from '../Post'
import PostsSkeleton from 'Components/Explore/Home/PostsSkeleton'
import EndReached from 'Components/Explore/Home/EndReached'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from 'store/slices/post'

export default function UserPosts({ HeaderComp }) {
    const { userPosts, pages: { user: pages } } = useSelector(state => state.post)
    const { id } = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const listRef = useRef()

    useEffect(() => { dispatch(getUserPosts(id)) }, [])

    function fetchMorePosts() {
        pages.current < pages.total &&
            dispatch(getUserPosts(id, pages.current + 1))
    }

    function gotoTop() {
        listRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    return (
        <View>
            <FlatList
                ListHeaderComponent={HeaderComp}
                ref={listRef}
                data={userPosts}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) =>
                    <Post post={{ id: index, ...item }} />
                }
                ListFooterComponent={
                    (pages.total && pages.current >= pages.total) ?
                        <EndReached gotoTop={gotoTop}
                            text='scroll to Top'
                        />
                        : <PostsSkeleton />
                }
                onEndReached={fetchMorePosts}
                onEndReachedThreshold={1}
            />
        </View>
    )
}
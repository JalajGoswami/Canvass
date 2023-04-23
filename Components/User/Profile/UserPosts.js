import { View } from 'react-native'
import React, { useState, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Post from '../Post';
import PostsSkeleton from 'Components/Explore/Home/PostsSkeleton';
import EndReached from 'Components/Explore/Home/EndReached';

const baseUrl = 'assets/images/categories/'
const POSTS = [
    {
        user: 'First User',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing @user_name, sed do eiusmod tempor incididunt ut labore elaboris nisi ut aliquip ex ea commodo consequat.',
        likes: 45,
        dislikes: 15,
        comments: 21
    },
    {
        user: 'Second User',
        text: 'Lorem ipsum @user_name sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore elaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require(baseUrl + 'science-cosmos.webp'),
        aspect_ratio: 1.6,
        likes: 52,
        dislikes: 19,
        comments: 28
    },
    {
        user: 'Third User',
        text: 'Lorem ipsum dolor sit @user_name, consectetur adipiscing elit.',
        image: require(baseUrl + 'art-illustration.webp'),
        aspect_ratio: 1.332,
        likes: 68,
        dislikes: 7,
        dislikes: 36
    },
];

export default function UserPosts({ HeaderComp }) {
    const [posts, setPosts] = useState(POSTS)
    const [pages, setPages] = useState({ current: 1, last: 2 })
    const listRef = useRef()

    function fetchMorePosts() {
        if (pages.current >= pages.last)
            return;
        setTimeout(() => {
            setPosts(prev => prev.concat(POSTS))
            setPages(prev => ({ ...prev, current: prev.current + 1 }))
        }, 3000)
    }

    function gotoTop() {
        listRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    return (
        <View>
            <FlatList
                ListHeaderComponent={HeaderComp}
                ref={listRef}
                data={posts}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) =>
                    <Post post={{ id: index, ...item }} />
                }
                ListFooterComponent={
                    pages.current >= pages.last ?
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
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import StyledBody from '../../Components/Common/StyledBody'
import TopBar from '../../Components/Explore/TopBar'
import TrendingTopics from '../../Components/Explore/TrendingTopics'
import UserPost from '../../Components/User/UserPost'

const baseUrl = '../../assets/images/categories/'
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
    return (
        <StyledBody>
            <TopBar />
            <TrendingTopics />
            <FlatList
                data={POSTS}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={(_, i) => i.toString()}
                renderItem={args => <UserPost {...args} />}
            />
        </StyledBody>
    )
}
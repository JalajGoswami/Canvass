import React from 'react'
import StyledBody from '../../Components/Common/StyledBody'
import TopBar from '../../Components/Explore/TopBar'
import TrendingTopics from '../../Components/Explore/TrendingTopics'

export default function Explore() {
    return (
        <StyledBody>
            <TopBar />
            <TrendingTopics />
        </StyledBody>
    )
}
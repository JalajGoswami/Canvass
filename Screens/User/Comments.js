import { View } from 'react-native'
import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Post from 'Components/User/Post'

export default function Comments({ route }) {
  const { post, postState } = route.params

  return (
    <StyledBody>
      <Post
        post={post}
        postState={postState}
      />
    </StyledBody>
  )
}
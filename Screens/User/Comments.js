import React from 'react'
import StyledBody from 'Components/Common/StyledBody'
import Post from 'Components/User/Post'
import Comment from 'Components/User/Comments'
import { useTheme } from 'react-native-paper'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'

export default function Comments({ route }) {
  const { post, postState } = route.params
  const theme = useTheme()

  return (
    <StyledBody>
      <Post
        post={post}
        postState={postState}
      />
      <FlatList
        data={[...(new Array(4)).keys()]}
        refreshControl={
          <RefreshControl
            onRefresh={() => null}
            refreshing={false}
            colors={[theme.colors.secondary, theme.colors.primary, theme.colors.error]}
            progressBackgroundColor={theme.colors.surface}
          />
        }
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ index }) =>
          <Comment showReply={Boolean(index % 2)} />
        }
      />
    </StyledBody>
  )
}
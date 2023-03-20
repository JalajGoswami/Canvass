import { View } from 'react-native'
import React from 'react'
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'
import { useTheme } from 'react-native-paper'

export default function PostsSkeleton() {
  const theme = useTheme()
  const Skeleton = () => (
      <ContentLoader
        style={{ marginVertical: 6 }}
        animate={true} height={250} speed={0.8}
        backgroundColor={theme.colors.surface}
        foregroundColor={theme.colors.surfaceVariant}
      >
        <Circle cx="31" cy="25" r="15" />
        <Rect x="58" y="16" rx="2" ry="2" width="140" height="18" />
        <Rect x="0" y="50" rx="3" ry="3" width="400" height="6" />
        <Rect x="0" y="66" rx="3" ry="3" width="178" height="6" />
        <Rect x="0" y="82" rx="2" ry="2" width="400" height="180" />
      </ContentLoader>
  )
  return (
    <View>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </View>
  )
}
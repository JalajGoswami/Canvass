import { Dimensions, View } from 'react-native'
import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { useTheme } from 'react-native-paper'

export default function CategorySkeleton() {
    const theme = useTheme()
    const Skeleton = () => (
        <ContentLoader
            animate={true} speed={0.8}
            height={110} width={Dimensions.get('window').width - 32}
            backgroundColor={theme.colors.surface}
            foregroundColor={theme.colors.surfaceVariant}
        >
            <Rect x="0" y="20" rx="30" ry="30" width="160" height="90" />
            <Rect x="170" y="20" rx="30" ry="30" width="160" height="90" />
        </ContentLoader>
    )
    return (
        <View style={{ alignItems: 'center' }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </View>
    )
}
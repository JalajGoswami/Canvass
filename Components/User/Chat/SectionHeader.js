import { StyleSheet } from 'react-native'
import React from 'react'
import StyledText from 'Components/Common/StyledText'
import Box from 'Components/Common/Box'

export default function SectionHeader({ title }) {
    const styles = StyleSheet.create({
        chip: {
            alignSelf: 'center',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 10,
            marginVertical: 10,
        }
    })

    return (
        <Box variant='surface'
            style={styles.chip}
            shadow='low'
        >
            <StyledText size={8}>
                {title}
            </StyledText>
        </Box>
    )
}
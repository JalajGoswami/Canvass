import React from 'react'
import { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'
import StyledText from '../Common/StyledText'

function getActiveColors() {
    const bgColor = ['primaryContainer', 'secondaryContainer',
        'tertiaryContainer', 'errorContainer']
    const txtColor = ['onPrimaryContainer', 'onSecondaryContainer',
        'onTertiaryContainer', 'onErrorContainer']
    const randomIndex = Math.floor(Math.random() * 4)
    return { bg: bgColor[randomIndex], txt: txtColor[randomIndex] }
}

export default function CategoryCard({
    id, label, image,
    selected, handleClick
}) {
    const theme = useTheme()
    const selectedColors = useMemo(() => getActiveColors(), [selected])
    const styles = StyleSheet.create({
        card: {
            marginTop: 20,
            borderRadius: 30,
        },
        img: {
            width: 160,
            height: 90,
            borderRadius: 30,
        },
        overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            borderRadius: 30,
            backgroundColor: selected ?
                (theme.colors[selectedColors.bg] + 'dd')
                : 'rgba(27, 27, 31, 0.5)',
        },
        txt: {
            position: 'absolute',
            top: '50%',
            transform: [{ translateY: -10 }],
            width: '100%',
            textAlign: 'center',
            marginVertical: 'auto',
            color: selected ?
                theme.colors[selectedColors.txt]
                : '#fff',
        }
    })
    return (
        <TouchableRipple onPress={() => handleClick(id)}
            style={styles.card} borderless={true}
        >
            <View>
                <Image source={image} resizeMode='cover'
                    style={styles.img} blurRadius={selected ? 5 : 2}
                />
                <View style={styles.overlay} />
                <StyledText variant='title-bold' size={7}
                    style={styles.txt}
                >
                    {label}
                </StyledText>
            </View>
        </TouchableRipple>
    )
}
import React from 'react'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import StyledBody from '../../../Components/Common/StyledBody'
import StyledText from '../../../Components/Common/StyledText'
import CategoryCard from '../../../Components/SignUp/CategoryCard'

export default function Prefrence() {
    const [selected, setSelected] = useState([])
    function updateSelected(id) {
        setSelected(prev => {
            if (prev.includes(id)) {
                const idx = prev.indexOf(id)
                prev.splice(idx, 1)
            } else prev.push(id)
            return [...prev]
        })
    }
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        headerTxt: {
            width: '90%',
            marginTop: 20,
        },
        cardsWrapper: {
            width: '92%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }
    })
    const baseUrl = '../../../assets/images/'
    const categories = [
        { name: 'Tech & Gadgets', image: require(baseUrl + 'tech-gadgets.webp') },
        { name: 'Science & Cosmos', image: require(baseUrl + 'science-cosmos.webp') },
        { name: 'Art & Illustration', image: require(baseUrl + 'art-illustration.webp') },
        { name: 'Traveling', image: require(baseUrl + 'traveling.webp') },
        { name: 'Sports', image: require(baseUrl + 'sports.webp') },
        { name: 'Food & Taste', image: require(baseUrl + 'food-taste.webp') },
        { name: 'Gaming', image: require(baseUrl + 'gaming.webp') },
        { name: 'Movies & Shows', image: require(baseUrl + 'movies-shows.webp') },
        { name: 'Cars', image: require(baseUrl + 'cars.webp') },
        { name: 'Heroes & Fiction', image: require(baseUrl + 'heroes-fiction.webp') },
    ]
    return (
        <StyledBody style={styles.container}>
            <StyledText style={styles.headerTxt} variant='title'>
                Choose your favorite fields of interest (atleast 3)
            </StyledText>
            <View style={styles.cardsWrapper}>
                {categories.map(({ name, image }, i) => (
                    <CategoryCard key={i} id={i}
                        label={name} image={image}
                        selected={selected.includes(i)}
                        handleClick={updateSelected}
                    />
                ))}
            </View>
        </StyledBody>
    )
}
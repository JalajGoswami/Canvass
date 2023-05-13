import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import StyledBody from 'Components/Common/StyledBody'
import StyledText from 'Components/Common/StyledText'
import { showToast } from 'Components/Common/StyledToast'
import CategoryCard from 'Components/SignUp/CategoryCard'
import { DisplayFont } from 'theme/theme'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import CategorySkeleton from 'Components/SignUp/CategorySkeleton'
import { fetchCategories } from 'store/slices/tag'
import API from 'utils/API'

export default function Prefrence({ navigation }) {
    const { categories, loading, error } = useSelector(state => state.tag)
    const [selected, setSelected] = useState([])
    const { params } = useRoute()
    const dispatch = useDispatch()

    useFocusEffect(
        useCallback(() => (
            navigation.addListener('beforeRemove',
                e => e.data.action.type != 'RESET' &&
                    e.preventDefault()
            )
        ), [])
    )

    useEffect(() => { dispatch(fetchCategories()) }, [])

    useEffect(() => { error && showToast(error) }, [error])

    function updateSelected(id) {
        setSelected(prev => {
            if (prev.includes(id)) {
                const idx = prev.indexOf(id)
                prev.splice(idx, 1)
            } else prev.push(id)
            return [...prev]
        })
    }

    async function handleSubmit() {
        if (selected.length < 3) {
            showToast('Select atleast 3 Topics !')
            return;
        }
        try {
            await API('/user/prefrence')
                .post({
                    userId: params.userId,
                    categories: selected
                })
            navigation.reset({ index: 1, routes: [{ name: 'Login' }] })
            showToast('Signup complete now Login')
        }
        catch (err) { showToast(err?.message) }
    }

    const styles = StyleSheet.create({
        container: {
        },
        headerTxt: {
            marginHorizontal: 16,
            marginTop: 20,
            marginBottom: 10,
        },
        cardsWrapper: {
            marginHorizontal: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        Btn: {
            marginHorizontal: 16,
            borderRadius: 8,
            marginTop: 30,
        },
        btnTxt: {
            fontFamily: DisplayFont,
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 12,
        }
    })

    return (
        <StyledBody style={styles.container}>
            <StyledText style={styles.headerTxt} variant='title'>
                Choose your favorite fields of interest (atleast 3)
            </StyledText>
            {loading ?
                <CategorySkeleton />
                :
                <View style={styles.cardsWrapper}>
                    {categories?.map(({ id, name, image }) => (
                        <CategoryCard key={id} id={id}
                            label={name} image={image}
                            selected={selected.includes(id)}
                            handleClick={updateSelected}
                        />
                    ))}
                </View>
            }
            <Button mode='contained' style={styles.Btn}
                labelStyle={styles.btnTxt}
                onPress={handleSubmit}
            >
                Submit
            </Button>
        </StyledBody>
    )
}
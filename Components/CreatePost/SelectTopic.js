import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useTheme } from 'react-native-paper'
import { BodyFont } from 'theme/theme'
import StyledText from 'Components/Common/StyledText'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from 'store/slices/tag'

export default function SelectTopic({ setCategory }) {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.tag)
    const theme = useTheme()

    useEffect(() => {
        !categories && dispatch(fetchCategories())
    }, [])

    const data = categories?.map(c => ({ ...c, title: c.name })) ?? []

    const styles = StyleSheet.create({
        dropdownWrapper: {
            marginHorizontal: 15,
            marginTop: 15,
        },
        dropdownInp: {
            color: theme.colors.onSurface,
            fontFamily: BodyFont,
            fontSize: 14,
            borderRadius: 5,
        },
        listWrapper: {
            backgroundColor: theme.colors.surface,
        },
        listItem: {
            color: theme.colors.onSurface,
            fontFamily: BodyFont,
            fontSize: 14,
        },
        itemSeprator: {
            height: 0.5,
            backgroundColor: theme.colors.outline + '33'
        },
        dropdownBtns: {
            backgroundColor: theme.colors.surface,
            marginRight: 0,
            paddingRight: 0,
        }
    })

    return (
        <View>
            <AutocompleteDropdown
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={true}
                dataSet={data} direction='up'
                onSelectItem={setCategory}
                containerStyle={styles.dropdownWrapper}
                suggestionsListContainerStyle={styles.listWrapper}
                suggestionsListTextStyle={styles.listItem}
                rightButtonsContainerStyle={styles.dropdownBtns}
                inputContainerStyle={{
                    backgroundColor: theme.colors.surface
                }}
                textInputProps={{
                    placeholder: 'Select Post Topic',
                    placeholderTextColor: theme.colors.outline,
                    style: styles.dropdownInp,
                    autoCorrect: false,
                }}
                ItemSeparatorComponent={
                    <View style={styles.itemSeprator} />
                }
                EmptyResultComponent={
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <StyledText color='onSurface'>
                            Nothing found
                        </StyledText>
                    </View>
                }
            />
        </View >
    )
}
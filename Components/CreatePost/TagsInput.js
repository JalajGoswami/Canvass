import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useTheme } from 'react-native-paper'
import { BodyFont } from 'theme/theme'
import StyledText from 'Components/Common/StyledText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { showToast } from 'Components/Common/StyledToast'
import { useDispatch, useSelector } from 'react-redux'
import { getTagByCategory, searchTag } from 'store/slices/tag'

export default function TagsInput({ category, selectedTags, setSelectedTags }) {
    const theme = useTheme()
    const dropdownRef = useRef()
    const inputRef = useRef()
    const textRef = useRef()
    const { tags, loading } = useSelector(state => state.tag)
    const dispatch = useDispatch()
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        category && dispatch(getTagByCategory(category.id))
    }, [category])

    useEffect(() => {
        if (!tags) return;

        const result = tags.map(c => ({ ...c, title: c.name }))
        const regex = new RegExp(textRef.current, 'i')
        const exactMatch = result.find(t => t.name.match(regex))
        if (!exactMatch)
            result.push({ id: 'custom', title: textRef.current })

        setSuggestions(result)
    }, [tags])

    const styles = StyleSheet.create({
        tagsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 15,
            marginTop: 15,
            marginBottom: -10
        },
        tagChip: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: theme.colors.outline,
            marginRight: 5,
            marginBottom: 5,
        },
        removeIcon: {
            marginLeft: 2,
            marginRight: -2,
            color: theme.colors.onSurface
        },
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
        },
    })

    function handleSelect(item) {
        if (!item) return;
        if (selectedTags.length >= 10) {
            showToast('Upto 10 tags are allowed !')
            return;
        }
        setSelectedTags(prev =>
            prev.find(d => d.title == item.title) ?
                prev : prev.concat(item)
        )
        dropdownRef.current?.clear()
    }

    function removeTag(tag) {
        setSelectedTags(prev =>
            prev.filter(d => d.title != tag)
        )
    }

    function getSuggestions(txt) {
        if (!txt) return;
        const keyword = txt.trim().replace(/ /g, '_')
        if (txt.includes(' '))
            inputRef.current.setNativeProps({ text: keyword })
        textRef.current = keyword
        dispatch(searchTag({ keyword }))
    }

    return (
        <View>
            {selectedTags.length > 0 &&
                <View style={styles.tagsContainer}>
                    {selectedTags.map((tag, i) => (
                        <View key={i}
                            style={styles.tagChip}
                        >
                            <StyledText size={9}
                                color='onSurface'
                            >
                                {tag.title}
                            </StyledText>
                            <TouchableOpacity
                                onPress={() => removeTag(tag.title)}
                            >
                                <MaterialCommunityIcons
                                    name='close' size={15}
                                    style={styles.removeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            }
            <AutocompleteDropdown
                controller={ref => {
                    dropdownRef.current = ref
                }}
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={true}
                onSelectItem={handleSelect}
                loading={loading}
                dataSet={suggestions}
                onChangeText={getSuggestions}
                debounce={500} direction='up'
                containerStyle={styles.dropdownWrapper}
                suggestionsListContainerStyle={styles.listWrapper}
                suggestionsListTextStyle={styles.listItem}
                rightButtonsContainerStyle={styles.dropdownBtns}
                inputContainerStyle={{
                    backgroundColor: theme.colors.surface
                }}
                textInputProps={{
                    placeholder: 'Search Tags here..',
                    placeholderTextColor: theme.colors.outline,
                    style: styles.dropdownInp,
                    autoCorrect: false,
                    onLayout: e => { inputRef.current = e.target }
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
        </View>
    )
}
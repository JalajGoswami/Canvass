import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { useTheme } from 'react-native-paper'
import { BodyFont } from 'theme/theme'
import StyledText from 'Components/Common/StyledText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { showToast } from 'Components/Common/StyledToast'

export default function TagsInput() {
    const theme = useTheme()
    const dropdownRef = useRef()
    const [selectedTags, setSelectedTags] = useState([])
    const [suggestions, setSuggestions] = useState([
        { id: '1', title: 'Alpha' },
        { id: '2', title: 'Beta' },
        { id: '3', title: 'Gamma' },
    ])

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
        setSuggestions(prev =>
            prev.filter(d => d.id != 'custom').concat({
                id: 'custom', title: txt
            })
        )
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
                dataSet={suggestions}
                onChangeText={getSuggestions}
                debounce={500}
                containerStyle={styles.dropdownWrapper}
                suggestionsListContainerStyle={styles.listWrapper}
                suggestionsListTextStyle={styles.listItem}
                rightButtonsContainerStyle={styles.dropdownBtns}
                inputContainerStyle={{
                    backgroundColor: theme.colors.surface
                }}
                textInputProps={{
                    placeholder: 'Search Tag here..',
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
        </View>
    )
}
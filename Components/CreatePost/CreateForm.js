import { StyleSheet, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'
import TagsInput from './TagsInput'
import SelectTopic from './SelectTopic'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from 'Components/Common/StyledToast'
import ImageSelector from './ImageSelector'
import { updateTags } from 'utils/services'
import { createPost } from 'store/slices/post'
import { useNavigation } from '@react-navigation/native'

export default function CreateForm() {
    const theme = useTheme()
    const { error, loading } = useSelector(state => state.post)
    const dispatch = useDispatch()
    const textBody = useRef('')
    const [imgFile, setImgFile] = useState()
    const [category, setCategory] = useState()
    const [selectedTags, setSelectedTags] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const { replace } = useNavigation()

    useEffect(() => { error && showToast(error) }, [error])

    const styles = StyleSheet.create({
        input: {
            marginBottom: 5,
            maxHeight: 145
        },
        submtBtn: {
            marginHorizontal: 15,
            borderRadius: 5,
            marginTop: 15
        }
    })

    async function onSubmit() {
        if (!textBody.current) {
            showToast('Text is required to Post')
            return;
        }
        if (!category) {
            showToast('Topic is required')
            return;
        }
        if (selectedTags.length < 2) {
            showToast('Add atleast 2 tags')
            return;
        }
        setSubmitting(true)
        const tags = selectedTags.map(t => t.title)
        await updateTags({ tags, category: category.id })
        const form = new FormData()
        form.append('body', textBody.current)
        form.append('categoryId', category.id)
        form.append('tags', tags.join(','))
        if (imgFile) {
            form.append('image', imgFile)
            form.append('aspect_ratio', imgFile.aspect_ratio)
        }
        dispatch(createPost(form))
        setSubmitting(false)
        replace('Home', { screen: 'Explore' })
    }

    return (
        <View>
            <TextInput
                placeholder='Write something splendid of your own'
                style={styles.input}
                multiline mode='outlined'
                numberOfLines={5}
                onChangeText={t => { textBody.current = t }}
                selectionColor={theme.colors.tertiary + '66'}
                placeholderTextColor={theme.colors.outline}
                outlineColor='transparent'
                activeOutlineColor='transparent'
            />
            <ImageSelector
                imgFile={imgFile}
                setImgFile={setImgFile}
            />
            <SelectTopic
                setCategory={setCategory}
            />
            <TagsInput
                category={category}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
            <Button
                onPress={!(submitting || loading) && onSubmit}
                buttonColor={theme.colors.secondary}
                textColor={theme.colors.onSecondary}
                style={styles.submtBtn}
                loading={submitting || loading}
            >
                Share this Post
            </Button>
        </View>
    )
}
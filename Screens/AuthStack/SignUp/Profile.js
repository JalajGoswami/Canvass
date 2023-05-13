import React, { useState, useCallback } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import StyledBody from 'Components/Common/StyledBody'
import DetailForm from 'Components/SignUp/DetailForm'
import ProfileImage from 'Components/SignUp/ProfileImage'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import API from 'utils/API'
import { showToast } from 'Components/Common/StyledToast'

export default function Profile({ navigation }) {
    const { params } = useRoute()
    const [imgFile, setImgFile] = useState()

    useFocusEffect(
        useCallback(() => (
            navigation.addListener('beforeRemove',
                e => e.preventDefault()
            )
        ), [])
    )

    async function onSubmit(data) {
        const form = new FormData()
        form.append('email', params.email)
        Object.keys(data).forEach(key => {
            form.append(key, data[key])
        })
        imgFile && form.append('profile_pic', imgFile)

        try {
            const res = await API('/user/profile')
                .post(form, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
            navigation.navigate(
                'SignUp/Prefrence', { userId: 8 ?? res.data.id }
            )
        }
        catch (err) {
            showToast(err?.message)
        }
    }

    return (
        <StyledBody>
            <KeyboardAvoidingView behavior='position'>
                <ProfileImage
                    imgFile={imgFile}
                    setImgFile={setImgFile}
                />
                <DetailForm
                    onSubmit={onSubmit}
                />
            </KeyboardAvoidingView>
        </StyledBody>

    )
}
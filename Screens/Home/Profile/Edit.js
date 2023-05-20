import { KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import ProfilePic from 'Components/User/Profile/ProfilePic'
import StyledBody from 'Components/Common/StyledBody'
import BioForm from 'Components/Profile/BioForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from 'store/slices/user'

export default function Edit({ navigation }) {
    const [imgFile, setImgFile] = useState()
    const submitting = useRef(false)
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.user)

    useEffect(() => {
        if (submitting.current && !loading)
            navigation.goBack()
    }, [loading])

    function onSubmit(data) {
        submitting.current = true
        const form = new FormData()
        for (let field in data) {
            form.append(field, data[field])
        }
        imgFile && form.append('profile_pic', imgFile)
        dispatch(updateProfile(form))
    }

    return (
        <StyledBody>
            <KeyboardAvoidingView behavior='position'>
                <ProfilePic editing
                    imgFile={imgFile}
                    setImgFile={setImgFile}
                />
                <BioForm
                    onSubmit={onSubmit}
                />
            </KeyboardAvoidingView>
        </StyledBody>
    )
}
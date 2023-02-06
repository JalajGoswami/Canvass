import React from 'react'
import { HelperText, TextInput } from 'react-native-paper'

export default function FormInput({
    formProps,
    name,
    info,
    helperTextStyle,
    onChange,
    ...otherProps
}) {
    const isError = formProps.touched[name] && formProps.errors[name]
    return (
        <>
            <TextInput
                onChangeText={txt => {
                    formProps.handleChange(name)(txt)
                    if (onChange)
                        onChange(txt)
                }}
                onBlur={formProps.handleBlur(name)}
                value={formProps.values[name]}
                error={isError}
                {...otherProps}
            />
            <HelperText
                visible={isError || info}
                type={isError ? 'error' : 'info'}
                padding='none'
                style={helperTextStyle || {
                    width: otherProps?.style?.width || '100%',
                }}
            >
                {isError || info}
            </HelperText>
        </>
    )
}
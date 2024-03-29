import * as Yup from 'yup'

export const SignupSchema = Yup.object({
    user_name: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .lowercase('Must be Lowercase').strict()
        .matches(/^\S+$/, 'Without Spaces')
        .required('Required'),

    full_name: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),

    password: Yup.string()
        .min(8, 'Minimum 8 digits required !')
        .max(20, 'Too Long!')
        .matches(/[a-z]/, 'Must include a lower case alphabet.')
        .matches(/[A-Z]/, 'Must include a upper case alphabet.')
        .matches(/\d/, 'Must include a number.')
        .required('Required'),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Your passwords do not match.')
        .required('Required'),

    about: Yup.string().max(200, 'Upto 200 Characters allowed.')
})

export const LoginSchema = Yup.object({
    email: Yup.string()
        .email('Not a valid Email')
        .required('Required'),

    password: Yup.string()
        .required('Required')
})

export const UpdateProfileSchema = Yup.object({
    user_name: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .lowercase('Must be Lowercase').strict()
        .matches(/^\S+$/, 'Without Spaces')
        .required('Required'),

    full_name: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),

    about: Yup.string()
        .max(200, 'Upto 200 Characters allowed.')
        .nullable(),

    website: Yup.string()
        .url('Not a valid URL')
        .nullable()
})
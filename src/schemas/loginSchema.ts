import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object().shape({
    email: yup
        .string()
        .email('use a valid email')
        .required('This field must not be empty'),
    password: yup
        .string()
        .required('this field must not be empty')
})

export const loginSchema = yupResolver(schema)

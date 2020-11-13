import * as React from 'react'

import {useForm} from 'react-hook-form'

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {Input} from '../components/'

import './login.scss'

const schema = yup.object().shape({
    email: yup
        .string()
        .email('use a valid email')
        .required('This field must not be empty'),
    password: yup
        .string()
        .required('this field must not be empty')
})

export const Login: React.FC = () => {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="page">
            <div className="page--content">

            </div>
            <div className="page--login">
                <h1 className="page--login__title">welcome back</h1>

                <form onSubmit={onSubmit} className="page--login__form">
                    <Input 
                        type="text" 
                        ref={register} 
                        name="email" 
                        label="Email" 
                        error={errors.email ? errors.email.message : ''}
                    />
                    <Input 
                        type="password" 
                        ref={register} 
                        name="password" 
                        label="Password" 
                        error={errors.password ? errors.password.message : ''}
                    />

                    <button type="submit">enter</button>
                </form>
            </div>
        </div>
    )
}
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// components
import { Button, Input } from '../components/'

//redux logic
import { loginInputs, login } from '../features/login/loginSlice'

//input validations
import { loginSchema } from '../schemas'

import { ReactComponent as UserAssets } from '../assets/user.svg'

import './styles/pages.scss'


export const Login: React.FC = () => {
    const dispatch = useDispatch()

    const { push } = useHistory()

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: loginSchema
    })

    //handle submit data
    const onSubmit = handleSubmit((data: loginInputs) => {
        dispatch(login(data))
        //push to home
        push('/')
    })

    return (
        <div className="page">
            <div className="page--content">
                <UserAssets />
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

                    <Button
                        type="submit"
                        extraclass="btn--green btn--rounded btn--full"
                        errors={errors.email || errors.password}
                    >enter</Button>
                </form>
            </div>
        </div>
    )
}
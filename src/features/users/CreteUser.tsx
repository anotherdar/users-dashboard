import * as React from 'react';
import { /*useFieldArray ,*/ useForm } from 'react-hook-form';
import { Button, Input, Select } from '../../components';

import { userSchema } from '../../schemas'

import './CreateUser.scss'

export const UserCreator: React.FC = () => {
    const { errors, register, handleSubmit } = useForm({
        mode: 'onBlur',
        resolver: userSchema
    });


    console.log(errors)
    const sendUserData = handleSubmit((data: User) => {
        console.log(data)
    })


    return (
        <div className="create-user scroll">
            <form onSubmit={sendUserData} className='create-user__form'>

                <Input type='text' name='firstName' ref={register} error={errors.firstName?.message} label="Name" />
                <Input type='text' name='lastName' ref={register} label='Last Name' error={errors.lastName?.message} />
                <Input type='date' name='birthDate' ref={register} label='Birth Date' max="2005-12-31" error={errors.birthDate?.message} />
                <Input type='number' name='age' label='Age' ref={register} error={errors.age?.message} />
                <Select name='gender' label='Gender' ref={register} error={errors.gender?.message}>
                    <option value="Select a gender">Select a gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </Select>

                <div className="radio-group">
                    <h1 className="input--label__title"
                        style={{
                            color: errors.haveChild ? 'var(--text-color-error)' : ''
                        }}
                    >Have child?</h1>
                    <div className="radio-group__actions">
                        <Input name="haveChild" type="radio" label="no" value="no" ref={register} />
                        <span className="separator" />
                        <Input name="haveChild" type="radio" label="yes" value="yes" ref={register} />
                    </div>
                    <span className="input--error">{errors && errors.haveChild?.message}</span>
                </div>

                <Select name='civilStatus' label='Civil Status' ref={register} error={errors.civilStatus?.message}>
                    <option value="Select your status">Select your status</option>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                </Select>
                <Input type='number' name='identificationNumber' label='Identification Number' ref={register} error={errors.identificationNumber?.message} />
                <Input type='number' name='phoneNumber' label='Phone Number' ref={register} error={errors.phoneNumber?.message} />
                <Button type='submit' extraClass="btn--green" >Add user</Button>
            </form>
        </div>
    )
}
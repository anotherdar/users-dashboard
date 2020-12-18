import * as React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button, Input, Select, Title, Banner } from '../../components';

import { userSchema } from '../../schemas'

import './styles/CreateUser.scss'
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import { useHistory } from 'react-router-dom';

export const UserCreator: React.FC = () => {
    const { errors, register, handleSubmit, control } = useForm({
        mode: 'onBlur',
        resolver: userSchema,
        defaultValues: {
            address: [
                {
                    country: "",
                    city: "",
                    streetAddress: ""
                }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "address"
    })

    const dispatch = useDispatch();
    const history = useHistory()

    const sendUserData = handleSubmit((data: User) => {
        dispatch(addUser(data))

        history.push("/users")
    })

    return (
        <div className="create-user scroll">
            <form onSubmit={sendUserData} className='create-user__form'>
                <Title title="Personal information" hasUnderLine={true} icon="person" />

                <Input type='text' name='firstName' ref={register} error={errors.firstName?.message} label="Name" />
                <Input type='text' name='lastName' ref={register} label='Last Name' error={errors.lastName?.message} />
                <Input type='number' name='identificationNumber' label='Identification Number' ref={register} error={errors.identificationNumber?.message} />
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

                <Title title="Contact information" hasUnderLine={true} icon="phone" />


                <Input type='number' name='phoneNumber' label='Phone Number' ref={register} error={errors.phoneNumber?.message} />
                <Input type='email' name='email' label='Email' ref={register} error={errors.email?.message} />

                <Title title="Address information" hasUnderLine={true} icon="add_location" />
                <div className="address-section">
                    <div className="Address-title">
                        <h4>add new address</h4>
                        <div
                            className={`btn--full-rounded btn--green btn--sm pointer`}
                            onClick={() => append({
                                country: "",
                                city: "",
                                streetAddress: ""
                            })}
                        >
                            <i className="material-icons">add</i>
                        </div>
                    </div>
                    {
                        fields.map((i, idx) => {
                            return (
                                <div key={i.id}>
                                    <div className="form-group">
                                        <div className="form-group--fields">
                                            <Input type='text' name={`address[${idx}].country`} ref={register} error={errors.address?.[idx]?.country?.message} label="Country" defaultValue={i.country} />
                                            <Input type='text' name={`address[${idx}].city`} ref={register} label='City' error={errors.address?.[idx]?.city?.message} defaultValue={i.city} />
                                            <Input type='text' name={`address[${idx}].streetAddress`} label='Street Address' ref={register} error={errors.address?.[idx]?.streetAddress?.message} defaultValue={i.streetAddress} />
                                        </div>
                                        <div
                                            onClick={() => {
                                                if (fields.length >= 1) {
                                                    remove(idx)
                                                }
                                            }}
                                            className="btn--full-rounded btn--state-danger btn--sm pointer center"
                                            style={{
                                                marginTop: `var(--xl-size)`
                                            }}
                                        >
                                            <i className="material-icons">delete</i>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>

                {
                    fields.length <= 0 && <Banner type="error" message="Address is missing!, click on add button to add a new address" />
                }

                <Button type='submit' extraclass="btn--green btn--full" disabled={Object.keys(errors).length !== 0}>Add user</Button>
            </form>
        </div>
    )
}
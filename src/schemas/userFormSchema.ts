import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


// const addressSchema =  yup.object().shape({
//     country: yup.string().required('Required'),
//     city: yup.string().required('Required'),
//     street_address: yup.string().required('Required')
// })
const schema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    identificationNumber: yup.string().required('Required'),
    age: yup.number().min(18, 'age must be greater than 18 o equal').required('Required').typeError("Required"),
    gender: yup.string().oneOf(["male", "female", "other"], "Required").required('Required'),
    phoneNumber: yup.number().required('Required').typeError("Required"),
    email: yup.string().email('Please provide a valid email').required('Required'),
    haveChild: yup.string().oneOf(["yes", "no"], "Required").required('Required'),
    birthDate: yup.string().required('Required'),
    civilStatus: yup.string().oneOf(["married", "single"], "Required").required('Required')  
})

export const userSchema = yupResolver(schema)
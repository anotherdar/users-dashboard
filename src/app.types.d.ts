type Address = {
    country: string
    city: string;
    street_address: number,
}

type Gender = 'male' | 'female' | 'other'
type CivilStatus = 'married' | 'single'

type User = {
    firstName: string,
    lasName: string,
    identificationNumber: number,
    age: number,
    gender: Gender,
    address: Array<Address>,
    phoneNumber: number,
    email: string,
    haveChild: boolean,
    birthDate: string,
    civilStatus: CivilStatus
}
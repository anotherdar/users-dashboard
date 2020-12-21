import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export type loginInputs = {
    email: string,
    password: string
}
type LoginState = {
    isAuth: boolean
}

const initialState: LoginState = {
    isAuth: false
}

const logOut = createAction('LOGOUT')

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action: PayloadAction<loginInputs>) {
            state.isAuth = true
        }
    },
    extraReducers: {
        [logOut.toString()](state) {
            state.isAuth = false
        }
    }
})

const { login } = loginSlice.actions

export { logOut, login }

export const selectLogin = (state: RootState) => state.login

export default loginSlice.reducer

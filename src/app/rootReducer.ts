import {combineReducers} from '@reduxjs/toolkit'

import loginSlice from '../features/login/loginSlice'
import userSlice from '../features/users/userSlice'

export default combineReducers({
    login: loginSlice,
    users: userSlice
})
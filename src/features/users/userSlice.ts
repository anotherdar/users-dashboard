import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser(state, action: PayloadAction<string>) {

        },
        removerUser(state, action: PayloadAction<string>) {

        },
        updateUser(state, action:PayloadAction<string>) {

        }
    }
})

export const userSelector = (state: RootState) => state.users
export const {addUser,removerUser,updateUser} = userSlice.actions
export default userSlice.reducer
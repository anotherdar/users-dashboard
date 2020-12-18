import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState: { users: Array<User> } = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            const newUser = {
                id: nanoid(4),
                ...action.payload
            }

            state.users.push(newUser)
        },
        removerUser(state, action: PayloadAction<string>) {
            state.users = state.users.filter(i => i.id !== action.payload)
        },
    }
})

export const userSelector = (state: RootState) => state.users.users
export const { addUser, removerUser } = userSlice.actions
export default userSlice.reducer
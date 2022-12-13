import {createSlice} from '@reduxjs/toolkit'

export const characterApiSlice = createSlice ({
    name: 'characterApi',
    initialState: {
        apiJSON: '',
    },
    reducers: {
        setApiJSON: (state, action) => void(state.apiJSON = action.payload.apiToJSON)
    }
})


export const {apiJSON} = characterApiSlice.actions
export default characterApiSlice.reducer
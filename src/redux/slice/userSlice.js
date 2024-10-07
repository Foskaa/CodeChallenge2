const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (initialState, action) => {
            initialState.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer // --> auto di convert menjadi namanya authReducer
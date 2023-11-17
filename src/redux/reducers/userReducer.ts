import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.userData = {}
    },
    updateUser: (state, action) => {
      state.userData = {...state.userData , ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeUser, updateUser } = userSlice.actions

export default userSlice
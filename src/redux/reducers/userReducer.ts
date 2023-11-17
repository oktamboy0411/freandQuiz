import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: JSON.parse(sessionStorage.getItem("userData") || "{}")
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state) => {
      state.userData = {}
      sessionStorage.removeItem("userData");
    },
    updateUser: (state, action) => {
      state.userData = {...state.userData , ...action.payload}
      sessionStorage.setItem("userData", JSON.stringify(state.userData))
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeUser, updateUser } = userSlice.actions

export default userSlice
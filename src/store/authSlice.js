import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: false },
  reducers: {
    register(state) {
       state.isLoggIn=false
    },
    login(state) {
      state.isLoggIn = true
    },
    logout(state) {
      state.isLoggIn = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice

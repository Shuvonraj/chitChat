import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  UserInfo: localStorage.getItem('userLoginInfo') ? JSON.parse(localStorage.getItem('userLoginInfo')) : null,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state,action) => {
    state.UserInfo = action.payload;;
    },
    
  },
})


export const { userLoginInfo } = counterSlice.actions

export default counterSlice.reducer
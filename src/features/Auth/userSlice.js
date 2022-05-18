import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from 'api/userApi'

export const register = createAsyncThunk('user/register', async payload => {
  const data = await userApi.register(payload)

  localStorage.setItem('access_token', data.jwt)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
})
const userSlice = createSlice({
  name: 'user',
  //states
  initialState: {
    current: {},
    setting: {},
  },
  //action
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    },
  },
})

const { reducer } = userSlice
export default reducer

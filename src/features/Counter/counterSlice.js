import { createSlice } from '@reduxjs/toolkit'

const couterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1
    },
    decrease(state, action) {
      return state - 1
    },
  },
})

const { actions, reducer } = couterSlice
export const { increase, decrease } = actions //name export
export default reducer

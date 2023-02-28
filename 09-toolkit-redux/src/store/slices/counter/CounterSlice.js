import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
  times:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
      state.times++
    },
    incrementBy: (state,action) => {
      state.counter += action.payload
      state.times++
    },
    decrement: (state) => {
      state.counter -= 1
      state.times++
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions
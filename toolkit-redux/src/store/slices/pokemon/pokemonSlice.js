import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page:0,
  pokemon: [],
  isLoading:false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemos: (state) => {
      state.isLoading=true
    },
  },
})
export const { increment } = pokemonSlice.actions
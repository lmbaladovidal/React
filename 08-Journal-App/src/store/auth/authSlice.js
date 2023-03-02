import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status:'not-authenticated',//checking, not-authenticated, authenticated
  uid:null,
  emai:null,
  displayName:null,
  photoURL:null,
  errorMessage:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state,action)=>{
      state.status = 'logged'

    },
    logout:(state,payload)=>{

    },
    checkingCredentials:(state)=>{
        state.status = 'checking';
    }
      
    },
  },
)
export const { login,logout,checkingCredentials } = authSlice.actions
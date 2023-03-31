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
    login:(state,{payload})=>{
      state.status = 'authenticated';//checking, not-authenticated, authenticated
      state.uid = payload.uid ;
      state.emai = payload.emai ;
      state.displayName = payload.displayName ;
      state.photoURL = payload.photoURL ;
      state.errorMessage = null ;

    },
    logout:(state,{payload})=>{
      state.status = 'not-authenticated';//checking, not-authenticated, authenticated
      state.uid = null;
      state.emai = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials:(state)=>{
        state.status = 'checking';
    }
      
    },
  },
)
export const { login,logout,checkingCredentials } = authSlice.actions
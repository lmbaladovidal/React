import { singInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login } from "./authSlice"

export const checkingAuthentication = (email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = ()=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()
        result.ok?dispatch(login()):null
    }
}
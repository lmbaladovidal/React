import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = ()=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()
        console.log(result);
        return result.ok?dispatch(login(result)):dispatch(logout(result.errorCode))
    }
}

export const startCreatinUserWithEmailPassword = ({email,password,displayName})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const resp = await registerUserWithEmailPassword({email,password,displayName})
        console.log(resp);
    }
}
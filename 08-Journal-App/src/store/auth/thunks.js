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
        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName})
        console.log(errorMessage);
        if(!ok) return dispatch(logout({errorMessage}))
        dispatch(login({uid,displayName,email,photoURL}))
    }
}
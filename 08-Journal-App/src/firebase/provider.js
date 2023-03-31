import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { checkingCredentials } from "../store/auth/authSlice";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async()=>{

    try {
        const result = await signInWithPopup(firebaseAuth,googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName,email,photoURL,uid} = result.user
        return{
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);
        return{
            ok:false,
            errorCode:error.code,
            errorMessage:error.errorMessage,            
        }
    }
}


export const registerUserWithEmailPassword = async({email,password,displayName})=>{
    try {
        console.log({email,password,displayName});
        const resp = await createUserWithEmailAndPassword(firebaseAuth,email,password)
        const {uid,photoURL} = resp.user;
        console.log(resp)
        //TODO: Actualizar displayname en Firebase
        return {
            ok:true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        return{
            ok:false,
            errorCode:error.code,
            errorMessage:error.errorMessage,            
        }
    }
}



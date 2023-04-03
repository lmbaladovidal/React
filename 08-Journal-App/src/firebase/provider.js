import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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
            errorMessage:error.code,           
        }
    }
}


export const registerUserWithEmailPassword = async({email,password,displayName})=>{
    try {
        console.log({email,password,displayName});
        const resp = await createUserWithEmailAndPassword(firebaseAuth,email,password)
        const {uid,photoURL} = resp.user;
        console.log(resp)
        await updateProfile(firebaseAuth.currentUser,{displayName})
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
            errorMessage:error.code,           
        }
    }
}

export const loginUserWithEmailPassword = async({email,password})=>{
    try {
        const {user} = await signInWithEmailAndPassword(firebaseAuth,email,password)
        console.log(user);
        console.log(user.displayName);
        return{
            ok:true,
            uid:user.uid,
            photoURL:user.photoURL,
            email:user.email,
            displayName:user.displayName
        }
    } catch (error) {
        console.log(error);
        return{
            ok:false,
            errorMessage:error.code,           
        }
    }

}



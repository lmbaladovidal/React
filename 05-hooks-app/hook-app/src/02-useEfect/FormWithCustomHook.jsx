import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {


    const { formState,onInputChange,username,email,password } = useForm({
                        username:'',
                        email:'',
                        password:''
                        }
                    );

  return (
    <>
        <hr />
        <h1>Form With Custom Hook</h1>
        <input type="text" 
               className="form-control" 
               placeholder="UserName" 
               name="username"
               value={ username }
               onChange={onInputChange}
        />
        <input type="email" 
               className="form-control mt-2" 
               placeholder="email@dominio.com "
               name="email"
               value={email} 
               onChange={onInputChange}
        />
        <input type="password" 
               className="form-control mt-2" 
               placeholder="Contraseña "
               name="password"
               value={password} 
               onChange={onInputChange}
        />
    </>
  )
}

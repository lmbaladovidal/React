import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Lmbv',
        email:'lm.baladovidal@gmail.com'
    })
    const {username,email} = formState
    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })        
    }

    useEffect(()=>{
        console.log('formState Mount');
    },[])

    useEffect(()=>{
        console.log('formState Change');
    },[formState])

    useEffect(()=>{
        console.log('email Change');
    },[email])
    

  return (
    <>
        <h1>SimpleForm</h1>
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
        {
            (username==='lmbv') && <Message/> 
        }
        <hr/>
    </>
  )
}

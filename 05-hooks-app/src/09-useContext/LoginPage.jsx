import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);
  console.log(user);

  return (
    <>
        <h1>LoginPage</h1>
        <hr/>
        <h4 aria-label='h4'>
          {user?.nombre}
        </h4>

        <button
          className='btn btn-primary'
          onClick={() => setUser({id:3,nombre:'Leandro',email:'lm.baladovidal@gmail.com'})}>
          Establecer Usuario
        </button>

    </>
  )
}

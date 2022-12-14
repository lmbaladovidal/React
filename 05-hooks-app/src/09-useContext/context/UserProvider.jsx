import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id:123,
    nombre:'Leandro Martin Balado Vidal',
    email:'lm.baladovidal@gmailcom'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'mundo',user:user}}>
        {children}
    </UserContext.Provider>
  )
}

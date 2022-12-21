import React, { useState } from 'react'
import { UserContext } from './UserContext'

const user = {
    id:123,
    nombre:'Leandro Martin Balado Vidal',
    email:'lm.baladovidal@gmailcom'
}

export const UserProvider = ({children}) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
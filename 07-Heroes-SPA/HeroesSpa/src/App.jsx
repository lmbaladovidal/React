import { useState } from 'react'
import './App.css'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'



export const App = ()=>{
  const [count, setCount] = useState(0)

    return (
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
  )
}


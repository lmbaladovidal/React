import { useState } from 'react'
import './App.css'
import { AppRouter } from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <AppRouter/>
    </div>
  )
}

export default App

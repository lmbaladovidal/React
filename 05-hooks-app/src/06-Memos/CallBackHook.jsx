import React, { useCallback, useState } from 'react'
import { ShowIncremet } from './ShowIncremet'

export const CallBackHook = () => {

    const [counter, setcounter] = useState(10)
    
    const incrementFather =  useCallback(
      (value) => {
        setcounter( (c)=> c + value )
      },
      [],
    )
    
      


  return (
    <>
        <h1>UseCallBackHook: { counter } </h1>
        <ShowIncremet increment={incrementFather}/>
        <hr/>
    </>
  )
}

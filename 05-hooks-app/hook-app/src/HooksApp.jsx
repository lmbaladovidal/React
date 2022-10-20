import React from 'react'

import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'

export const HooksApp = () => {
  return (
    <>
        <h1>HookApp</h1>
        <hr />
        <CounterApp/>
        <CounterWithCustomHook/>
        <SimpleForm/>
    </>
  )
}

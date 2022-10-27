import React from 'react'

import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'

export const HooksApp = () => {
  return (
    <>
        <h1>HookApp</h1>
        <hr/>
{/*         <CounterApp/>
        <CounterWithCustomHook/>
        <SimpleForm/>
        <FormWithCustomHook/> */}
        <MultipleCustomHooks/>
    </>
  )
}

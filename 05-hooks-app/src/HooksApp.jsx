import React from 'react'

/* import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/LayoutEffect'
import { MemoHook } from './06-Memos/MemoHook'
import { Memorice } from './06-Memos/Memorice' 
import { CallBackHook } from './06-Memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer'*/
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";

export const HooksApp = () => {
  return (
    <>
        {/*<h1>HookApp</h1>
        <hr/>
         <CounterApp/>
        <CounterWithCustomHook/>
        <SimpleForm/>
        <MultipleCustomHooks/>
        <FocusScreen/>
        <Layout/>
        <Memorice/>
        <MemoHook/> 
        <CallBackHook/>
        <Padre/>
        <TodoApp/>
          <MainApp/>
        */}
        <BrowserRouter>
        <FormWithCustomHook/>
        </BrowserRouter>
    </>
  )
}

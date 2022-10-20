import { useState } from "react"

export const CounterApp = () => {
    const [state,setCounter] = useState({
        counter0:0,
        counter1:10,
        counter2:20,
        counter3:30
    })

    const aumentarContador = ()=>{
       const auxCounter= {
            ...state,
            counter1:state.counter1+1
        }
        setCounter(auxCounter)
    }
  return (
    <>
    <h1>CounterApp</h1>
    <h4>Counter: {state.counter1}</h4>
    <h4>Counter: {state.counter2}</h4>
    <h4>Counter: {state.counter3}</h4>
    <h4>Counter: {state.counter0}</h4>
    <button className="btn" onClick={ aumentarContador }>+1</button>
    <hr />
    </>
  )
}

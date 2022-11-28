import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initialState=[
  {id: new Date().getTime(),
  description:'Recolectar la piedra del alma',
  done:false,},
  {id: new Date().getTime() + 100,
    description:'Recolectar la piedra del poder',
    done:false,},
]

export const TodoApp = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
        <h1>TodoApp</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </>
  )
}

import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
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

  const [todos, dispatch] = useReducer(todoReducer, initialState)
  
  const handleNewTodo = (todo)=>{
    const action ={type:'[TODO] Add ToDo',
                   payload:todo}
    dispatch(action)
    console.log({todo});
  }
  return (
    <>
      <h1>TodoApp (10) <small><small>pendientes: 2</small></small></h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr/>
          <TodoAdd onNewToDo={handleNewTodo}/>
        </div>
      </div>
    </>
  )
}

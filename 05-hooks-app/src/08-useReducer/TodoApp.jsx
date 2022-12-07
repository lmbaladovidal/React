import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";

const initialState=[]

const init = ()=>{ 
  return JSON.parse( localStorage.getItem( 'ToDos' ) ) || [] 
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState,init)

  useEffect(() => {
    localStorage.setItem('ToDos',JSON.stringify(todos))
  }, [todos])
  
  
  const handleNewTodo = (todo)=>{
    const action ={type:'[TODO] Add ToDo',
                   payload:todo}
    dispatch(action)

  }

  const handleRemoveTodo = (todo)=>{
    const action ={type:'[TODO] Remove ToDo',
                   payload:todo}
    dispatch(action)

  }
  
  const handleToggleTodo = (todoId)=>{
    const action ={type:'[TODO] Toggle ToDo',
                 payload:todoId}
    dispatch(action)

  }
  return (
    <>
      <h1>TodoApp (10) <small><small>pendientes: 2</small></small></h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr/>
          <TodoAdd onNewToDo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}

import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


const init = ()=>{ 
  return JSON.parse( localStorage.getItem( 'ToDos' ) ) || [] 
}

export const useTodo = (initialState) => {

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

    const todosCount = todos.length

    const todosPendingCount = todos.filter((todo)=>{return !todo.done}).length


  return {
    todos,
    todosCount,
    todosPendingCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
}

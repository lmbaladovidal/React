
import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";




export const TodoApp = () => {

  const {todos,todosCount,todosPendingCount, handleNewTodo,handleRemoveTodo,handleToggleTodo} = useTodo([])

  return (
    <>
      <h1>TodoApp: ({todosCount}) <small><small>pendientes: {todosPendingCount}</small></small></h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregaar ToDo</h4>
          <hr/>
          <TodoAdd onNewToDo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}

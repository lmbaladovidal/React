import { TodoItem } from './TodoItem'

export const TodoList = ({todos,onRemoveTodo,onToggleTodo}) => {
  return (
    <ul className="list-group">
        { todos.map(todo=>( <TodoItem 
                              key={todo.id} 
                              onRemoveTodo={onRemoveTodo} 
                              todo={todo}
                              onToggleTodo={onToggleTodo}
                            /> )
                    )
        }
    </ul>
  )
}

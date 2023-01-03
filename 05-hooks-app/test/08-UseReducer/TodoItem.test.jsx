import { render,screen,fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Purebas en <TodoItem/>', () => { 

    const todo = {
        id:1,
        description:'piedra del alma',
        done:false
    };
    
    const todoDone = {
        id:1,
        description:'piedra del alma',
        done:true
    };

    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=>{ jest.clearAllMocks() })
    
    test('should show the pending toDo', () => { 
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onRemoveTodo={onRemoveTodoMock}
            />
        );
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        expect(spanElement.className).toBe('align-self-center ')

     })

     test('should show the complete toDo', () => { 
        
        render(
            <TodoItem 
                todo={todoDone} 
                onToggleTodo={onToggleTodoMock} 
                onRemoveTodo={onRemoveTodoMock}
            />
        );
        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toBe('align-self-center text-decoration-line-through')

     })

     test('span should call toggleTodo on Click Event', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onRemoveTodo={onRemoveTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);


      })

      
     test('button should call remoteTddo on Click Event', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onRemoveTodo={onRemoveTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button',{name:'Borrar'});
        fireEvent.click(buttonElement);
        expect(onRemoveTodoMock).toHaveBeenCalledWith(todo);

      })
     

 })
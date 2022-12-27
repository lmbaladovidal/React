import { render,screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Purebas en <TodoItem/>', () => { 

    const todo = {
        id:1,
        description:'piedra del alma',
        done:false
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

 })
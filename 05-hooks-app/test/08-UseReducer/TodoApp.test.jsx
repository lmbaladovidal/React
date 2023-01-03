import { render,screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodos"


jest.mock("../../src/hooks/useTodos")

describe('Pruebas sobre <TodoApp/>', () => { 
    
    useTodo.mockReturnValue({
        todos:[ {
                    id:1,description:'piedra del alma', done:false},
                {
                    id:2, description:'piedra del poder', done:true}],
        todosCount:2,
        todosPendingCount:1, 
        handleNewTodo:jest.fn(),
        handleRemoveTodo:jest.fn(),
        handleToggleTodo:jest.fn()})

    test('should render the componet correctly', () => { 
        
        render(<TodoApp/>);
        //screen.debug()
        expect(screen.getByText('piedra del alma')).toBeTruthy()
        expect(screen.getByText('piedra del poder')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()

     })

 })
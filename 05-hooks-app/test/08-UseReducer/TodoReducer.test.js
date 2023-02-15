import { act } from "react-dom/test-utils";
import { todoReducer } from "../../src/08-useReducer/TodoReducer"

describe('Pruebas en TodoReducer', () => { 
    
    const initialState = [{
        id:1,
        description:'Demo Todo',
        done:false
    }]    

    test('should return the initialState', () => { 
        
        const newState = todoReducer(initialState,{});
        expect(newState).toBe(initialState);

     })

     test('should add a toDo', () => { 
        
        const action = {
            type: '[TODO] Add ToDo',
            payload:{
                id:2,
                description:'Nuevo toDo',
                done:false
            }
        };

        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

      })

      test('should delete a toDo', () => { 
        
        const action ={
            type:'[TODO] Remove ToDo',
            payload:initialState[0]
        }    
           
        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(0);

       })

       test('should do the toggle of toDo', () => { 
        
        const action = {
            type:'[TODO] Toggle ToDo',
            payload:initialState[0].id
        }

        const newState = todoReducer(initialState,action);
        expect(newState[0].done).toBeTruthy();
        const newState2 = todoReducer(newState,action);
        expect(newState2[0].done).toBeFalsy();

        })

 })
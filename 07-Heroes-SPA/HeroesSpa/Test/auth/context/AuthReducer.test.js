import { useReducer } from "react"
import { AuthReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/Types"

describe('Pruebas Sobre AuthReducer', () => {

    const initialState = {
        logged: false
    }

    test('should return the default State', () => {
        const init = () => {
            const user = JSON.parse(localStorage.getItem('user'));
            return {
                logged: !!user,
                user: user
            }
        }
        const defaultState = AuthReducer({logged:false},{})
        expect(defaultState).toEqual(initialState);

    })

    test('should set the user and auntenticate', () => { 
        const user = { id: 'ABC', name: 'Leandro Martin' }
        const action = { type: types.login, payload: user };
        const state = AuthReducer({logged:false},action);
        expect(state.logged).toBeTruthy();
        expect(state.user).toBe(user)

     })

     test('should UnSet the user and logout', () => { 
        const user = { id: 'ABC', name: 'Leandro Martin' }
        const login = { type: types.login, payload: user };
        const logOut = { type: types.logout };
        let state = AuthReducer({logged:false},login);
        state = AuthReducer(state,logOut);
        expect(state.logged).toBeFalsy();
        expect(state.user).toBeFalsy()

     })
})
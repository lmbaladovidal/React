import { useReducer } from 'react'
import { AuthContext } from './AuthContex'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/Types'


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {


    const [authState, dispatch] = useReducer(AuthReducer, {}, init);
    const login = (name = '') => {

        const user = { id: 'ABC', name: name }
        const action = { type: types.login, payload: user }

        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const logout = () => {
        const action = { type: types.logout, payload: null }
        localStorage.removeItem('user');
        dispatch(action)
    }
    console.log(authState);
    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

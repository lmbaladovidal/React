
import {render,screen} from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'
describe('Pruebas en <PublicRoute/>', () => { 
    
    test('should show the children if i not autenticathed', () => { 
        
        const contextValue = {logged: false}

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta Pública')).toBeTruthy();

     })

 })
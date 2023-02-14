import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";


describe('Pruebas sobre <PrivateRoute/>', () => {

    test('should navigate if is autenticathed', () => {

        Storage.prototype.setItem = jest.fn();
        const query = '/search?q=batman';
        const contextValue = {
            logged: true,
            user: { id: "ABC", name: "Leandro" }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={[query]}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath',query); 

    })

    test('should show the loging if i not autenticathed', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <h1>Ruta Publica</h1>
                        } />
                        <Route path='marvel' element={
                            <PrivateRoute>
                                <h1>Página Marvel</h1>
                            </PrivateRoute>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    })

})
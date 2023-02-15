import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas sobre <AppRouter/>', () => {

    test('should render the login if not autenticathed', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter> 
        );
    
        expect(screen.getByText('Login')).toBeTruthy();
    })

    

    test('should render the marvel page if is atentucathed', () => { 
        
        const contextValue = {
            logged: true,
            user:{
                id:'ABC',
                user:'Leandro Martin'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter> 
        );
        screen.debug()
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

     })

})
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { AppRouter } from "../../../src/router/AppRouter"
import { Navbar } from "../../../src/ui/components/NavBar"


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}))
describe('Pruebas sobre <NavBar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Leandro Martin'
        },
        logout: jest.fn()
    }
    beforeEach(() => { jest.clearAllMocks() });


    test('should show the name of the logged user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    })


    test('should call the Navigate and the logout when the button is clicked', () => {

        Storage.prototype.setItem = jest.fn();

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutBtn = screen.getByText('Logout');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalledWith();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {replace: true});

    })

})
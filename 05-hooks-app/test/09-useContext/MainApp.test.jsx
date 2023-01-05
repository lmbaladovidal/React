import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { HomePage } from "../../src/09-useContext/HomePage"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas sobre <MainApp/>', () => { 
    
    test('should render the homePage', () => { 
        
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
            );
        const aTag=screen.getByText('Home')
        expect(screen.getByText('HomePage')).toBeTruthy();
        screen.debug()

     })

     test('should render the LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={['/Login']}>
                <MainApp/>
            </MemoryRouter>
            );
        const aTag=screen.getByText('Home')
        expect(screen.getByText('LoginPage')).toBeTruthy();
        screen.debug()

     })

     test('should render the About', () => { 
        
        render(
            <MemoryRouter initialEntries={['/About']}>
                <MainApp/>
            </MemoryRouter>
            );
        const aTag=screen.getByText('Home')
        expect(screen.getByText('AboutPage')).toBeTruthy();
        screen.debug()

     })


 })
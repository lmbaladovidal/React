import { render,screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas en el componente <HomePage/>', () => { 
    
    const user = {id:1, name:'Leandro'}

    test('should render the component without the user', () => { 
        
            render(
                <UserContext.Provider value={{user:null}}>
                    <HomePage/>
                </UserContext.Provider>);

            const preTag = screen.getByLabelText('pre');
            expect(preTag.innerHTML).toBe('null');

     })

     test('should render the component with the user', () => { 
        
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>);
        screen.debug()
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);

    })

 })
import { fireEvent, render,screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas sobre el <LoginPage/>', () => { 
    
    test('should render the componen without the user', () => { 
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>);
        const h4Value = screen.getByLabelText('h4').innerHTML
        expect(h4Value).toBe("")

     })
    test('should call setUser when the button is clicked', () => { 
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user:null,setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>);

        const button = screen.getByRole('button');
        fireEvent.click(button) ;
        expect(setUserMock).toHaveBeenCalledWith({id:3,nombre:'Leandro',email:'lm.baladovidal@gmail.com'});

     })

 })
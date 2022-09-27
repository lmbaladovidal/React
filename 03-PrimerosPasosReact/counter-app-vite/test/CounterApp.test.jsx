import {fireEvent, render, screen} from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"
describe('pruebas en <CounterApp/>', () => { 
    const value = 100;
    test('debe matchear con el snapshot', () => { 
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
     });

     test('debe mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value}/>)
        expect(parseInt(screen.getByTestId("test-counter").innerHTML.trim())).toBe(100)
      });
      test('debe incrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText("+1") )  
        expect(screen.getByText('101')).toBeTruthy();
       })
      test('debe decrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText("-1") )  
        expect(screen.getByText('99')).toBeTruthy();
       })
      test('debe resetear el contador', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByRole('button',{name:'btn-reset'}) );  
        expect(screen.getByText('100')).toBeTruthy();
       })
 })
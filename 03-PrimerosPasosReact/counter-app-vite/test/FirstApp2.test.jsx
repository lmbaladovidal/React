import {render,screen} from "@testing-library/react"
import { FirstApp } from "../src/FirstApp";
describe('pruebas en <FirstApp/>', () => {
        const title = "Hola, soy Goku";
        const subTitle = "Hola, soy un subtitulo";
        test('debe hacer match con el snapshot', () => { 
                const {container} = render(<FirstApp title={title}/>)
                expect(container).toMatchSnapshot();
        })
        
        test('debe  mostrar el msj "Hola, soy Goku"', () => { 
                render(<FirstApp title={title}/>)
                expect(screen.getByText).toBeTruthy();
                //screen.debug();
         })
         test('debe mostrar el titulo en un h1', () => { 
                render(<FirstApp title={title}/>)
                expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);
          });
          test('debe mostar el subtitulo enviado por props', () => { 
                render(<FirstApp title={title} subtitle={subTitle}/>);
                expect(screen.getAllByText(subTitle).length).toBe(2);

           })

    
});
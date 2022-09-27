import {render} from "@testing-library/react"
import { FirstApp } from "../src/FirstApp";
describe('pruebas en <FirstApp/>', () => {
/*     test('debe hacer match con el snapshot', () => { 
        const title = 'Hola, soy Kakaroto';
        const {container} = render( <FirstApp title={title} /> );
        expect(container).toMatchSnapshot();
     }) */
     test('debe mostrar el titulo en un h1', () => { 
        const title = 'Hola, soy Kakaroto';
        const {container, getByText,getByTestId} = render( <FirstApp title={title} /> );
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
/*         const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title) */
      })
      test('debe de mostrar el subtitulo mostrado por props ', () => {
        const title = "Hola, soy otro pj";
        const subTitle = "Soy un subtitulo";
        const {getAllByText} = render( <FirstApp title={title} subtitle={subTitle}/> );
        expect(getAllByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);
       })
    
});
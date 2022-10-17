import { GifGrid, GifItem } from "../../src/components"
import {render, screen} from '@testing-library/react';

describe('pruebas en <GifItem/>',()=>{
    const title = "Kimetsu";
    const url = "http://kimetsu.com/";
    test('should match with snapshoot', () => { 
        const { container } = render(<GifItem url={url} title={title} />)
        expect(container).toMatchSnapshot();
     })

    test('should the picture with the rigth URL and ATL', () => { 
        render(<GifItem url={url} title={title} />);
        //screen.debug()
        const {src,alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
     })

     test('should display the title in the component', () => { 
        render(<GifItem url={url} title={title} />);
        expect(screen.getByText(title)).toBeTruthy()
      })
})
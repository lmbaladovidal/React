import {fireEvent, render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock('../../src/hooks/useFetchGif');

describe('test on <GifGrid/>', () => { 
    const category = 'Tanjiro'
    useFetchGif.mockReturnValue({
        images: [],
        isLoading: true 
    });
    test('should show the loading at begining', () => {
        render(<GifGrid category={category}/>);
        screen.getByText('Cargando...');
        screen.getByText(category);
        
    })
    
    test('should display items when the images are loaded with the useFetchGif', () => { 
        const gifs = [{
            id:'ABC',
            title:"Tanjiro",
            url:'http://gif.com/tanjiro'
        },
        {
            id:'DEF',
            title:"Nezuko",
            url:'http://gif.com/Nezuko'
        }]
         useFetchGif.mockReturnValue({
             images: gifs,
             isLoading: false 
         });
         render(<GifGrid category={category}/>)
         expect( screen.getAllByRole('img').length).toBe(2);
        
     })
 })
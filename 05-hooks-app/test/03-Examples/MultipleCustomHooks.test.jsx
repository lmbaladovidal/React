import { fireEvent, render,screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-Examples"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas sobre <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ 
        counter:1,
        increment:mockIncrement })
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('should show the default component', () => { 

        useFetch.mockReturnValue(    {
            data:null,
            isLoading: true,
            hasError: null,
          });
        
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakinBad Quotes'));

        const nextButton = screen.getByRole('button',{name:'Next Quote'})
        expect( nextButton.disabled ).toBeTruthy(); 

 
     })

     test('should show a quote', () => { 
        useFetch.mockReturnValue(    {
            data:[{author:'Leandro',quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null,
          })
          render(<MultipleCustomHooks/>);
          const nextButton = screen.getByRole('button',{name:'Next Quote'})

          expect(screen.getByText('Hola Mundo')).toBeTruthy();
          expect(screen.getByText('Leandro')).toBeTruthy();
          expect( nextButton.disabled ).toBeFalsy(); 
      })

      test('should call increment function', () => { 

        const mockIncrement = jest.fn();
        useCounter.mockReturnValue({ 
            counter:1,
            increment:mockIncrement })

        useFetch.mockReturnValue(    {
            data:[{author:'Leandro',quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null,
          })
          render(<MultipleCustomHooks/>);
          const nextButton = screen.getByRole('button',{name:'Next Quote'})
          fireEvent.click(nextButton);
          expect(mockIncrement).toBeCalled();

       })

 })
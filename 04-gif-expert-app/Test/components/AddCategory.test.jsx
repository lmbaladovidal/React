import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components';
describe('pruebas es <AddCategory/>', () => { 
    test('should change the text box value', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>)
        const input =  screen.getByRole("textbox")
        fireEvent.input(input,{ target:{ value:'kimetsu no yaiba' } })
        expect(input.value).toBe('kimetsu no yaiba')
        screen.debug();
    })
 })
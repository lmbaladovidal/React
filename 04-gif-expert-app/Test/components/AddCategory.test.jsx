import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components';
describe('pruebas es <AddCategory/>', () => { 
    
    test('should change the text box value', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input =  screen.getByRole("textbox");
        fireEvent.input(input,{ target:{ value:'kimetsu no yaiba' } });
        expect(input.value).toBe('kimetsu no yaiba');
        screen.debug();
    })

    test('should call onNewCategory if the input has a value', () => { 
        const inputValue = 'Kimetsu No Yaiba';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input,{ target:{ value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith('Kimetsu No Yaiba');

     })
     
     test('shouldn\'t call onNewCategory if input is empty', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form')
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
      })
 })
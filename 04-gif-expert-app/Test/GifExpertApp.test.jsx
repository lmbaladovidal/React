import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useState } from 'react';
import { AddCategory } from '../src/components';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    const inputValue = 'Kimetsu'

    test('shouldn\'t add a category if it exist in the array', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input,{ target:{ value: inputValue } });
        fireEvent.submit(form);
        fireEvent.input(input,{ target:{ value: inputValue } });
        fireEvent.submit(form);
        const categoriesTest = screen.getAllByText('Kimetsu');
        expect(categoriesTest.length).toEqual(1)
    });

    test('should add a category if not exist in the array', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input,{ target:{ value: inputValue } });
        fireEvent.submit(form);
        const categoriesTest = screen.getAllByText('Kimetsu');
        expect(categoriesTest.length).toBeGreaterThan(0)
    });


});
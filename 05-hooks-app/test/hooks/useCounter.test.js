import {renderHook,act} from '@testing-library/react';

import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el userCounter', () => { 
    
    test('should return the custom Value: 10', () => { 
        
        const {result} = renderHook(()=>useCounter());
        const {counter,decrement,increment,reset} = result.current
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        
     })

     test('should the counter has the value: 100', () => { 
        
        const {result} = renderHook(()=>useCounter(100));
        expect(result.current.counter).toBe(100)
      })

      test('should increment the value in 3', () => { 
        
        const value = 10
        const {result} = renderHook(()=>useCounter(value));
        const {increment} = result.current
        act(()=>{
            increment();
            increment(2);
        })
        expect(result.current.counter).toBe(13)

       })

       test('should decrement the value in 3', () => { 
        
        const value = 10
        const {result} = renderHook(()=>useCounter(value));
        const {decrement} = result.current
        act(()=>{
            decrement();
            decrement(2);
        })
        expect(result.current.counter).toBe(7)

       })

       test('should reset the value at the custom value', () => { 
        
        const value = 10
        const {result} = renderHook(()=>useCounter(value));
        const {reset,increment} = result.current
        act(()=>{
            increment();
            reset();
        })
        expect(result.current.counter).toBe(value)

       })
    
 })
import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => { 
    
    const initialForm = {
        name:'leandro',
        email:'lm.baladovidal@gmail.com'
    }


    test('should return the default info', () => {         
        const { result } = renderHook(()=> useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
          })

     })

     test('should change the forms name', () => {         
        const newValue = "Martin"
        const {result } = renderHook(()=> useForm(initialForm));
        const {onInputChange,onResetForm} =result.current        
        act(()=>{
            onInputChange({target:{name:'name',value:newValue}})
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

      })

      test('should reset the form', () => {         
        const newValue = "Martin"
        const {result } = renderHook(()=> useForm(initialForm));
        const {onInputChange,onResetForm} =result.current
        act(()=>{
            onInputChange({target:{name:'name',value:newValue}})
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

      })

 })
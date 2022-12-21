import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => { 
    
    test('should return the default info', () => { 
        
        const {} = renderHook(()=> useForm();)

     })

 })
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Leandro"',()=>{
        const name = "Leandro";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
    
 })
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Leandro"',()=>{
        //1-Arrange
        const name = "Leandro";
        //2-Act
        const message = getSaludo(name);
        //3-Assert
        expect(message).toBe(`Hola ${name}`);
    })
    
 })
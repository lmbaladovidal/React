import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test 07-deses-arr', () => { 
    test('deberia retornar un string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
     })
 })
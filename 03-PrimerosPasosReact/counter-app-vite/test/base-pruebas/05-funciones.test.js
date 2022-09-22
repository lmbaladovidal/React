import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Test en 05-funciones', () => { 
    
    test("getUser debe de retornar un objeto",()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

    const user = getUser();
    expect(user).toStrictEqual(testUser);
    });

    test('getUsuarioActivo deberia  retornar un objeto', () => { 
        const name = 'Leandro';
        const user = getUsuarioActivo(name);
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        expect(user).toStrictEqual(testUser)
     })

    
 })
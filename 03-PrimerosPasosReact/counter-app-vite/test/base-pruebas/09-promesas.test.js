import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => { 
    
    test('debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe=>{
                expect(heroe).toEqual({
                                        id: 1,
                                        name: 'Batman',
                                        owner: 'DC'
                                    });                
                done();
            })
     })
     test('debe retornar un error si heroe no existe', (done) => { 
        const id = 10;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error=>{
                console.log(error);
                done();
            })
     })

 })
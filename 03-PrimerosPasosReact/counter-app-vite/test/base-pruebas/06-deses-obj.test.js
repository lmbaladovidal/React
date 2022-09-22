import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Test 06-deses-obj', () => { 
    test('deberia retornar un objeto', () => { 
        const objParam = {clave:"key",
                          nombre:"name",
                          edad:20
                         };
        const obj = usContext(objParam)
        const objTest = {
            nombreClave: "key",
            nombre: "name",
            anios: 20,
            rango:'Capitán',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        expect(obj).toStrictEqual(objTest);
     })
 })
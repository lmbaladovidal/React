import { types } from "../../../src/auth/types/Types"

describe('test on types.js', () => { 
    


     test('the key types should be login & logout', () => { 

        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        })

     })

 }) 
import { getGif } from "../../src/helpers/GetGifs"

describe('pruebas sobre GetGif()', () => { 
    test('should return an array of gif', async() => { 
        const gifs = await getGif('Kimetsu no jaiba');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
     })
 })
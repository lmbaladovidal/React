import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGif } from "../../src/hooks/useFetchGif"

describe('test on hooks fetchUseGif', () => { 
    const category = 'Tanjiro'
    test('should return the initial state', () => { 
        const {result,rerender,unmount} = renderHook(() => useFetchGif(category));
        const {images,isLoading} = result.current
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('should return an array of images and isLoading as false', async() => { 
        const {result,rerender,unmount} = renderHook(() => useFetchGif(category));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(1),
            {
                timeout:5000
            }
        );
        const {images,isLoading} = result.current
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     })
 })
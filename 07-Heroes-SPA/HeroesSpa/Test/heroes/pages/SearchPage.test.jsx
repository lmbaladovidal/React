import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}))

describe('Pruebas sobre <NavBar/>', () => {
    
    beforeEach(()=> jest.clearAllMocks())

    test('should render correctly whit the default values', () => {

        const { container } = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    })


    test('should render batman and the input with the queryString value', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        const img = screen.getByRole('img');
        const searchHero = screen.getByLabelText('searchHero')
        expect(input.value).toBe('batman');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        expect(searchHero.style.display).toBe('none')
    })


    test('should show an error if the hero is not founded', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Search />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('noHero').style.display).toBe('');
        expect(screen.getByLabelText('searchHero').style.display).toBe('none');

    })

    test('should call the navigate to the new view', () => {
        const inputValue ='superman'
        render(
            <MemoryRouter initialEntries={['/search']}>
                <Search />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })
        const form = screen.getByLabelText('search-form');
        fireEvent.submit(form);
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)


    })
})
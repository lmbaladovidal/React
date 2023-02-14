import { getByRole, getByText, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes";

describe('Pruebas sobre <NavBar/>', () => {


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
        console.log(searchHero.style._values);
        expect(input.value).toBe('batman');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        expect(searchHero.style.display).toBe('none')
    })
})
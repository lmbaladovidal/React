import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    
    const {page, pokemons, isLoading} = useSelector((state) => state.pokemons)
    const dispatch = useDispatch();
    console.log(pokemons);
    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            <ul>
                {pokemons.map((pokemon)=>(<li key={pokemon.name}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</li>))}
            </ul>
            <button
                disabled={isLoading}
                onClick={()=>dispatch(getPokemons(page))}
            >Next Page</button>
        </>
    )
}

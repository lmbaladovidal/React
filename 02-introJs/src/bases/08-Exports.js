import heroesDefault from '../data/heroes'

export const getHeroesById = (id)=>{
    return heroesDefault.find((heroe) => heroe.id === id);
}

export const getHeroesByOwner = (owner)=>{
    return heroesDefault.filter((heroe) => heroe.owner === owner);
}
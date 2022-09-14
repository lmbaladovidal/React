import heroes from './data/heroes'
console.log(heroes);

const getHeroesById = (id)=>{
    return heroes.find((heroe) => heroe.id === id);
}

const getHeroesByOwner = (owner)=>{
    return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroesById(2));
console.log(getHeroesByOwner('DC'));
let arr = [0,1,2,3];
arr[10] = 10;
console.log(arr);
console.log(arr[9]);
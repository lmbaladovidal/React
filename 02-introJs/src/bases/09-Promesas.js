import {getHeroesById} from './bases/08-Exports'

const getHeroesByIdAsync = id=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('2 segundos despues')
            const heroe = getHeroesById(id)
            heroe?resolve(heroe):reject("No se pudo encontrar el heroe");
        },2000)
    });
}

getHeroesByIdAsync(3)
    /*.then((heroe)=>{console.log('Heroe',heroe)})
    .catch(err=>console.warn(err));*/
    .then(console.log)
    .catch(console.warn);
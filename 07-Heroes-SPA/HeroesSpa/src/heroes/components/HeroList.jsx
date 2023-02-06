import React from 'react'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <div className='row rows-cols-1 row-cols-md-3 g-4"'>
        {
          heroes.map( hero =>(
            <li key= {hero.id}>
              {hero.superhero}
            </li>
          ))
        }
      </div>

    </>
  )
}

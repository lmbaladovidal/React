import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  }

) => {
  const heroImageURL = `/assets/heroes/${ id }.jpg`;
  return (
    <div className='col'>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageURL} alt={superhero} className='card-img' />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p>{characters}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const Heroe = () => {

  const {heroId} = useParams();

  const hero = useMemo(()=> getHeroById(heroId),[heroId]); 

  const navigate = useNavigate()

  const onNavigateBack = ()=>{
    return navigate(-1)
  }

  if(!hero){
    return <Navigate to={"/marvel"}/>
  }
  const heroImageURL = `/assets/heroes/${ hero.id }.jpg`;
  return (
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={heroImageURL} 
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft">
          </img>
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter Ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"> <b>Fist Appearance:</b> {hero.first_appearance}</li>            
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>
          <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }>
            Back
          </button>
        </div>
      </div>
  )
}

import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByName } from '../helpers';

export const Search = () => {

  
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search)
  
  const {searchText,onInputChange} = useForm({
    searchText:q
  });

  const heroes = getHeroByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && (heroes.length === 0)

  const onSearchSubmit = (event)=>{
      event.preventDefault();
      navigate(`?q=${searchText}`)
  }
  

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>

          <hr/>
          <form onSubmit={onSearchSubmit} aria-label='search-form'>
            <input 
              type="text"
              placeholder='Search Hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              >
            </input>
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr/>

          <div className='alert alert-primary animate__animated animate__fadeIn' aria-label='searchHero' style={{display: showSearch? '' : 'none'}}>
            Search a hero
          </div>
          <div className='alert alert-danger animate__animated animate__fadeIn' aria-label='noHero' style={{display: showError? '' : 'none'}} >
            No hero with <b>{q}</b>
          </div>
          {heroes.map(heroe=>(
            <HeroCard key={heroe.id} {...heroe}/>
          ))}
        </div>
      </div>
    </>
  )
}

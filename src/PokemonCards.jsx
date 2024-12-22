import React from 'react'

const PokemonCards = ({allPokemonData}) => {
  const {height,name,weight,types,stats,abilities,base_experience} = allPokemonData
  return (
      <li className="pokemon-card">
      <figure>
        <img src={allPokemonData.sprites.other.dream_world.front_default} alt={name} className='pokemon-image'/>
      </figure>
      <h1 className='pokemon-name'>{name}</h1>
      <div className='pokemon-info pokemon-highlight'>
        <p>
          {
            types.map((curr)=> curr.type.name).join(", ")
          }  
        </p>
      </div>
      
      <div className='grid-three-cols'>
        <p className='pokemon-info'>
            <span>Height:{height}</span>
        </p>
        <p className='pokemon-info'>
            <span>Weight:{weight}</span>
        </p>
        <p className='pokemon-info'>
            <span>speed:{stats[5].base_stat}</span>
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
      </li>
  )
}

export default PokemonCards

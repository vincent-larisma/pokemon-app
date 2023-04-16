import React from 'react'

export default function PokemonList({ name, img, type }) {
  return (
    <div className='pokemon-container '>
      <>
        <img src={img} alt='sprite' height={96} />
        <div>{name}</div>
        <div>{type}</div>
      </>
    </div>
  )
}

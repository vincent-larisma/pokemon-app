import React, { useState } from 'react'

export default function PaginatedList() {
  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <div className='selectable'>
        <div className='specification'>
          <input type='checkbox' />
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png'
            alt='pokeball'
            height={96}
          />
          <div>Charizard</div>
          <div>Type</div>
        </div>
      </div>
    </>
  )
}

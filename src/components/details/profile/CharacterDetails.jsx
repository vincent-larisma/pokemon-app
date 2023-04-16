import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/img/avatar.png'
import TrainerDetails from './TrainerDetails'
import PokemonList from './PokemonList'

import { useLocalStorage } from '../../../utils/useLocalStorage'

export default function CharacterDetails() {
  const name = useLocalStorage('get', 'name')
  const list = JSON.parse(useLocalStorage('get', 'userPokemonList')).selectedPokemonsList

  const handleEdit = () => {
    alert('The dev needs some coffee. Buy him coffee!')
  }

  return (
    <>
      <div className='details-container-layout'>
        <div className='details-info-wrapper'>
          <div className='avatar-icon'>
            <img src={avatar} alt='Avatar' className='avatar-img' />
          </div>
          <TrainerDetails name={name} />
        </div>

        <div className='details-pokemon-list-container'>
          <div className='details-pokemon-list-edit' onClick={handleEdit}>
            <i class='fa-regular fa-pen-to-square fa-lg'></i>
          </div>
          <div className='details-pokemon-list'>
            {list.length
              ? list.map((val, index) => {
                  return (
                    <div key={index}>
                      <PokemonList name={val.name} img={val.img} type={val.type} />
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </>
  )
}

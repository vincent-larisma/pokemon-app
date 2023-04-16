import React from 'react'
import avatar from '../../../assets/img/avatar.png'
import TrainerDetails from './TrainerDetails'
import PokemonList from './PokemonList'

import { useLocalStorage } from '../../../utils/useLocalStorage'

export default function CharacterDetails() {
  const name = useLocalStorage('get', 'name')
  const list = useLocalStorage('get', 'userPokemonList').selectedPokemonsList || { name: '', img: '', type: '' }

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
          <div className='details-pokemon-list'>
            {list.length
              ? list.map((value, index) => {
                  return (
                    <div key={index}>
                      <PokemonList />
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

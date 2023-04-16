import React from 'react'
import avatar from '../../../assets/img/avatar.png'
import TrainerDetails from './TrainerDetails'

import { useLocalStorage } from '../../../utils/useLocalStorage'

export default function CharacterDetails() {
  const name = useLocalStorage('get', 'name')

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
          <div className='details-pokemon-list'>hell</div>
        </div>
      </div>
    </>
  )
}

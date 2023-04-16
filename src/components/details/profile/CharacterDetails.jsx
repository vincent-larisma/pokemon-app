import React from 'react'
import avatar from '../../../assets/img/avatar.png'
import { useLocalStorage } from '../../../utils/useLocalStorage'

export default function CharacterDetails() {
  const name = useLocalStorage('get', 'name')

  return (
    <>
      <div className='details-container-layout'>
        <div className='avatar-icon'>
          <img src={avatar} alt='Avatar' className='avatar-img' />
        </div>
      </div>
    </>
  )
}

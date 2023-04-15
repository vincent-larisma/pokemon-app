import React from 'react'
import avatar from '../../assets/img/avatar.png'

export default function CharacterDetails() {
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

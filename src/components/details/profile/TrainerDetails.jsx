import React from 'react'

export default function TrainerDetails({ name }) {
  return (
    <div className='details-info'>
      <div className='details-info-title'>Trainer Info</div>
      <div className='details-info-item'>
        <span className='label'>Name:</span>
        <span className='value'>{name.replaceAll('"', ' ')}</span>
      </div>
      <div className='details-info-item'>
        <span className='label'>Class:</span>
        <span className='value'>Veteran</span>
      </div>
      <div className='details-info-item'>
        <span className='label'>Age:</span>
        <span className='value'>???</span>
      </div>
      <div className='details-info-item'>
        <span className='label'>Blood Type:</span>
        <span className='value'>B+</span>
      </div>
      <div className='details-info-item'>
        <span className='label'>Hair Color:</span>
        <span className='value'>Brown</span>
      </div>
      <div className='details-info-item'>
        <span className='label'>Hometown:</span>
        <span className='value'>Slateport City, Hoenn</span>
      </div>
    </div>
  )
}

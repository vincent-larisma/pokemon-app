import React, { useState } from 'react'

export default function Details() {
  const [name, setName] = useState(null)

  
  return (
    <>
      <div className='details-wrapper'>
        <div className='details-container'>
          <div className='title'>Please Name Your Character</div>
          <input type='text' className='input-name' />
          <button className='input-name-btn'> Submit</button>
        </div>
      </div>
    </>
  )
}

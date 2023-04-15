import React, { useState } from 'react'
import NameDetails from './NameDetails'

import CharacterDetails from './CharacterDetails'

export default function Details() {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <>
      <div className='details-wrapper'>
        {!isRegistered ? (
          <div className='details-container-name'>
            <NameDetails setIsRegistered={(val) => setIsRegistered(val)} />
          </div>
        ) : (
          <div className='details-container-layout'>
            <CharacterDetails />
          </div>
        )}
      </div>
    </>
  )
}

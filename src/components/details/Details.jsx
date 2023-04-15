import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import NameDetails from './NameDetails'

import CharacterDetails from './CharacterDetails'
import { useLocalStorage } from '../../utils/useLocalStorage'

export default function Details() {
  const navigate = useNavigate()
  const [isRegistered, setIsRegistered] = useState(useLocalStorage('get', 'userPokemonList'))

  useEffect(() => {
    if (isRegistered) {
      navigate('/profile')
    } else {
      navigate('/')
    }
  }, [isRegistered])

  return (
    <>
      <div className='details-wrapper'>
        <Routes>
          <Route path='/' element={<NameDetails setIsRegistered={(val) => setIsRegistered(val)} />}></Route>

          <Route path='/profile' element={<CharacterDetails />}></Route>
        </Routes>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import PaginatedList from './paginatedList/PaginatedList'

export default function NameDetails({ setIsRegistered }) {
  const [name, setName] = useState('')
  const [nextStep, setNextStep] = useState(false)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    if (name.length > 0) {
      useLocalStorage('set', 'name', name)
      setName('')
      // setIsRegistered(true)
      setNextStep(true)
    }
  }
  return (
    <>
      {!nextStep ? (
        <>
          <div className='title'>Please Name Your Character</div>
          <input type='text' className='input-name' value={name} onChange={handleChangeName} />
          <button className='input-name-btn' onClick={handleSubmit}>
            Next
          </button>
        </>
      ) : (
        <PaginatedList />
      )}
    </>
  )
}

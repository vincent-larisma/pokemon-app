import { useState } from 'react'
import NavBar from './components/NavBar'
import Details from './components/details/Details'

function App() {
  return (
    <>
      <div className='layout-container'>
        <NavBar />
        <Details />
      </div>
    </>
  )
}

export default App

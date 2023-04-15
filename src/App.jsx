import React from 'react'
import NavBar from './components/NavBar'
import Details from './components/details/Details'

import { FetchPokemonDataProvider } from './utils/PokemonDataContext'

function App() {
  return (
    <>
      <FetchPokemonDataProvider>
        <div className='layout-container'>
          <NavBar />
          <Details />
        </div>
      </FetchPokemonDataProvider>
    </>
  )
}

export default App

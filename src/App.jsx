import React from 'react'
import NavBar from './components/NavBar'
import Details from './components/details/Details'
import { BrowserRouter as Router } from 'react-router-dom'

import { FetchPokemonDataProvider } from './utils/PokemonDataContext'

function App() {
  return (
    <>
      <FetchPokemonDataProvider>
        <Router>
          <div className='layout-container'>
            <NavBar />
            <Details />
          </div>
        </Router>
      </FetchPokemonDataProvider>
    </>
  )
}

export default App

import React, { useState, useContext } from 'react'

const PokemonDataContext = React.createContext()

//Custom Hook
export function usePokemonDataContext() {
  return useContext(PokemonDataContext)
}

export function FetchPokemonDataProvider({ children }) {
  const [selectedPokemons, setSelectedPokemons] = useState({ list: [], selectedPokemonsList: [] })

  return (
    <PokemonDataContext.Provider value={{ selectedPokemons, setSelectedPokemons }}>
      {children}
    </PokemonDataContext.Provider>
  )
}

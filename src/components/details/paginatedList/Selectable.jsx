import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../utils/useFetch'
import { usePokemonDataContext } from '../../../utils/PokemonDataContext'

export default function Selectable({ name, url }) {
  const { selectedPokemons, setSelectedPokemons } = usePokemonDataContext()
  const [currentPokemon, setCurrentPokemon] = useState({ type: '', img: '' })

  let list = selectedPokemons.list
  let selectedPokemonsList = selectedPokemons.selectedPokemonsList

  const { type, img } = currentPokemon

  useEffect(() => {
    useFetch(url).then((data) => setCurrentPokemon({ type: data.types[0].type.name, img: data.sprites.front_default }))
  }, [url])

  const handleSelect = () => {
    if (list.includes(name)) {
      list.splice(list.indexOf(name), 1)
      selectedPokemonsList.forEach((val, index) => {
        if (val.name === name) {
          selectedPokemonsList.splice(index, 1)
        }
      })
    } else if (list.length < 6) {
      list.push(name)
      selectedPokemonsList.push({ name, type, img })
    }
    setSelectedPokemons({ list: list, selectedPokemonsList: selectedPokemonsList })
  }

  return (
    <div className='selectable' onClick={handleSelect}>
      <input type='checkbox' className='selectable-checkbox' checked={list.includes(name)} />

      {currentPokemon && (
        <>
          <img src={img} alt='sprite' height={96} />
          <div>{name}</div>
          <div>{type}</div>
        </>
      )}
    </div>
  )
}

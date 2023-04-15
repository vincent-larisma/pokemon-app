import React, { useState, useMemo } from 'react'
import Selectable from './Selectable'

export default function PaginatedList() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [urlDataResult, setUrlDataResult] = useState(null) //complete result of fetch
  const [pokemonData, setPokemonData] = useState(null) // result array only for the API
  const [selectedPokemon, setSelectedPokemon] = useState([])

  // function fetches the data from the API
  const getData = async (url) => {
    const data = await fetch(url)
    const result = await data.json()

    return result
  }

  useEffect(() => {
    getData(url).then((data) => {
      setUrlDataResult(data)
      setPokemonData(data.result)
      console.log(data)
    })
  }, [url])

  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <Selectable />
    </>
  )
}

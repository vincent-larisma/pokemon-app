import React, { useState, useEffect } from 'react'
import Selectable from './Selectable'

export default function PaginatedList() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [urlDataResult, setUrlDataResult] = useState(null) //complete result of fetch
  const [pokemonData, setPokemonData] = useState([]) // result array only for the API
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
      setPokemonData(data.results)
    })
    console.log(urlDataResult)
  }, [url])

  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <div className='pagination-container'>
        <button>Prev</button>
        <div className='pokemon-list'>
          {pokemonData.length
            ? pokemonData.map((value, index) => {
                return (
                  <div key={index}>
                    <Selectable />
                  </div>
                )
              })
            : null}
        </div>
        <button>Next</button>
      </div>
    </>
  )
}

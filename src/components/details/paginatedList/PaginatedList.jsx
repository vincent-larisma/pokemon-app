import React, { useState, useEffect } from 'react'
import Selectable from './Selectable'
import { getData } from '../../../utils/useFetch'

export default function PaginatedList() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [urlDataResult, setUrlDataResult] = useState(null) //complete result of fetch
  const [pokemonData, setPokemonData] = useState([]) // result array only for the API
  const [selectedPokemon, setSelectedPokemon] = useState([])

  useEffect(() => {
    getData(url).then((data) => {
      setUrlDataResult(data)
      setPokemonData(data.results)
    })
  }, [url])

  const handleClickNext = () => {
    setUrl(urlDataResult.next)
  }

  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <div className='pagination-container'>
        <div>
          <button>Prev</button>
        </div>
        <div className='pokemon-list'>
          {pokemonData.length
            ? pokemonData.map((value, index) => {
                return (
                  <div key={index}>
                    <Selectable name={value.name} url={value.url} />
                  </div>
                )
              })
            : null}
        </div>
        <div>
          <button onClick={handleClickNext}>Next</button>
        </div>
      </div>
    </>
  )
}

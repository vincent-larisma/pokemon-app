import React, { useState, useEffect, useMemo } from 'react'
import Selectable from './Selectable'
import { useFetch } from '../../../utils/useFetch'

export default function PaginatedList() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const [pokemonData, setPokemonData] = useState([]) // result array only for the API
  const [selectedPokemon, setSelectedPokemon] = useState([])

  useEffect(() => {
    useFetch(url).then((data) => setPokemonData(data.results))
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const pageCount = Math.ceil(pokemonData.length / itemsPerPage)

  const getPaginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return pokemonData.slice(startIndex, endIndex)
  }, [currentPage])

  const handleSelect = (val) => {
    setSelectedPokemon(val)
  }

  const handleClickNext = () => {
    if (currentPage === pageCount) {
      return
    }
    setCurrentPage(currentPage + 1)
  }

  const handleClickPrev = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <div className='pagination-container'>
        <div>
          <div className='paginated-button' onClick={handleClickPrev}>
            <i className='fa-solid fa-chevron-left fa-2xl'></i>
          </div>
        </div>
        <div className='pokemon-list'>
          {getPaginatedData.length
            ? getPaginatedData.map((value, index) => {
                return (
                  <div key={index}>
                    <Selectable
                      name={value.name}
                      url={value.url}
                      isSelected={(val) => setSelectedPokemon(val)}
                      selectedPokemon={selectedPokemon}
                    />
                  </div>
                )
              })
            : null}
        </div>
        <div>
          <div className='paginated-button' onClick={handleClickNext}>
            <i className='fa-solid fa-chevron-right fa-2xl'></i>
          </div>
        </div>
      </div>
      <div className='pagination-count'>
        Page {currentPage} of {pageCount}
      </div>
    </>
  )
}

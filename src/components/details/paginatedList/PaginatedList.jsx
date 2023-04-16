import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Selectable from './Selectable'
import { useFetch } from '../../../utils/useFetch'
import { usePokemonDataContext } from '../../../utils/PokemonDataContext'
import { useLocalStorage } from '../../../utils/useLocalStorage'

export default function PaginatedList({ setIsRegistered }) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const [pokemonData, setPokemonData] = useState([]) // result array only for the API
  const { selectedPokemons } = usePokemonDataContext() // for the local storage and also for the maximum number of pokemon selected

  // fetch API result
  useEffect(() => {
    useFetch(url).then((data) => setPokemonData(data.results))
  }, [])

  // page details

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const pageCount = Math.ceil(pokemonData.length / itemsPerPage) // max page

  // Pagination item limit

  const getPaginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return pokemonData.slice(startIndex, endIndex)
  }, [currentPage, pokemonData])

  // Pagination button function

  const handleClickNext = useCallback(() => {
    if (currentPage === pageCount) {
      return
    }
    setCurrentPage(currentPage + 1)
  }, [currentPage, pageCount])

  const handleClickPrev = useCallback(() => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }, [currentPage])

  // Will set the necessary details to local storage and go to path /profile
  const handleClickDone = useCallback(() => {
    setIsRegistered(true)
    useLocalStorage('set', 'userPokemonList', selectedPokemons)
    alert('You have successfully selected your Pokemon!')
  }, [selectedPokemons, setIsRegistered])

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
                    <Selectable name={value.name} url={value.url} />
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
      {selectedPokemons.list.length === 6 ? (
        <div className='pagination-count'>
          <button className='input-name-btn' onClick={handleClickDone}>
            Done
          </button>
        </div>
      ) : (
        <div className='pagination-count'>
          Page {currentPage} of {pageCount}
        </div>
      )}
    </>
  )
}

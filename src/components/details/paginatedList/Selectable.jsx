import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../utils/useFetch'

export default function Selectable({ name, url, isSelected, selectedPokemon }) {
  const [selected, setSelected] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({ type: '', img: '' })

  const { type, img } = currentPokemon

  useEffect(() => {
    useFetch(url).then((data) => setCurrentPokemon({ type: data.types[0].type.name, img: data.sprites.front_default }))
  }, [url])

  selectedPokemon.forEach((val) => console.log(val))

  const handleSelect = () => {
    let list = selectedPokemon
    list.push({ name, type, img })
    isSelected(list)
  }

  return (
    <div className='selectable' onClick={handleSelect}>
      <input type='checkbox' className='selectable-checkbox' checked={selected} />

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

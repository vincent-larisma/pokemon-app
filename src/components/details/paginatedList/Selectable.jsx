import React, { useEffect, useState } from 'react'
import { getData } from '../../../utils/useFetch'

export default function Selectable({ name, url, isSelected }) {
  const [selected, setSelected] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({ type: '', img: '' })

  const { type, img } = currentPokemon

  useEffect(() => {
    getData(url).then((data) => setCurrentPokemon({ type: data.types[0].type.name, img: data.sprites.front_default }))
  }, [url])

  return (
    <div className='selectable' onClick={() => setSelected(!selected)}>
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

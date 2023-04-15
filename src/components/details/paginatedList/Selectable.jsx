import React, { useState } from 'react'

export default function Selectable({ img, name, type, isSelected }) {
  const [selected, setSelected] = useState(false)

  return (
    <div className='selectable' onClick={() => setSelected(!selected)}>
      <input type='checkbox' className='selectable-checkbox' checked={selected} />

      <img src={img} alt='sprite' height={96} />
      <div>{name}</div>
      <div>{type}</div>
    </div>
  )
}

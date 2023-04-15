import React, { useState } from 'react'
import Selectable from './Selectable'

export default function PaginatedList() {
  return (
    <>
      <div className='title'>Please Choose Your Starter Team!</div>
      <Selectable />
    </>
  )
}

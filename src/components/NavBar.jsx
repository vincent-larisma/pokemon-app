import React from 'react'
import Logo from '../assets/img/pokeball_logo.png'

export default function NavBar() {
  return (
    <>
      <div className='nav-bar-container'>
        <div>Pokemon App</div>
        <img src={Logo} alt='pokeball' className='nav-logo' />
      </div>
    </>
  )
}

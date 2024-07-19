import React from 'react'
import { IoMenu as Menu } from 'react-icons/io5'
import imgUrl from '../../../assets/logo.png'

const LeftNav  = () => {
  return (
    <div className='menu-logo'>
      <button className='icon-container burgerMenu'>
        <Menu size = {25}/>
      </button>

      <div className='logo-container'>
        <Link>
          <img src = {imgUrl} alt = "youtube logo"/>
        </Link>
      </div>
      
    </div>
  )
}

export default LeftNav 

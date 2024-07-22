import React, { useContext } from 'react'
import { IoMenu as Menu } from 'react-icons/io5'
import imgUrl from '../../../assets/logo.png'
import { SideBarContext } from '../../../context/SideBarContext'
import { Link } from 'react-router-dom'

const LeftNav  = () => {
    const { handleToggleSideBar } = useContext(SideBarContext)

  return (
    <div className='menu-logo'>
      <button
        onClick={handleToggleSideBar} 
        className='icon-container burgerMenu'>
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

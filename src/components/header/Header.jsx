import React from 'react'
import "../header/header.css"
import {FiBell} from 'react-icons/fi'
import {GoSearch} from 'react-icons/go'

const Header = () => {
  return (
    <div className='header-main'>
       <div className='search-bar'>
          <span className='search-icon'><GoSearch/></span>
          <input placeholder='Search'/>
       </div>
       <div className='nav-items'>
          <button className='btn'>Make an Appointment</button>
          <button className='btn'>Add patient</button>
          <button  id='btn-bell'><FiBell/></button>
       </div>
    </div>
  )
}

export default Header
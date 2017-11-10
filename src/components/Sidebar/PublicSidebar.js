import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicSidebar = () => {
  return (
    <aside className='menu'>

      <ul className='menu-list'>
        <li><NavLink exact to='/' activeClassName='is-active'>Home</NavLink></li>
        <li><NavLink to='/login' activeClassName='is-active'>Login</NavLink></li>
      </ul>
    </aside>
  )
}

export default PublicSidebar

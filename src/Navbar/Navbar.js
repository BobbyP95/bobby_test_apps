import React from 'react'
import {Link} from 'react-router-dom'
import './Link.css'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
        <Link to='/'> Home</Link>
        <Link to='/excuse'> Excuse</Link>
        <Link to='/books'> Books</Link>
        <Link to='/country'> Country</Link>
        <Link to='/countries'> Countries</Link>
        <Link to='/profile'> Profile</Link>


    </div>
  )
}

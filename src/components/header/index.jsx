import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav  className='container flex justify-around py-5 text-white bg-black shadow-[0_0_10px_black]'>
      <NavLink to='/'>To Borrow</NavLink>
      <NavLink to='/debts'>To Lend</NavLink>
    </nav>
  )
}

export default Header

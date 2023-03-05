import React from 'react'
import './Navbar.scss'
import logo from '../../assets/avvic_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt={'avvic logo'} title='Logo' />

        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Services</Link>
            <Link to='/' className='link'>Features</Link>
            <Link to='/' className='link'>About Us</Link>
        </nav>

        <input type="submit" value="Login" />

    </div>
  )
}

export default Navbar
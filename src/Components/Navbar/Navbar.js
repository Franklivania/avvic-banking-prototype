import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/avvic_logo.png'


const Navbar = () => {
    function toggleNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const scrollHeight = window.pageYOffset;
        const breakpoint = 300; // The scroll position at which to apply the background color
      
        if (scrollHeight > breakpoint) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
      window.addEventListener('scroll', toggleNavbarBackground);
      
    return (
      <header className="navbar navbar-scrolled">

        a<img src={logo} alt="" />

        <aside>
          <NavItems />
        </aside>

      </header>
    );
  };

function NavItems() {
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (event) => {
    if (event.target.closest('.mobile') || event.target.closest('.mobilenav')) {
      return;
    }

    setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);


    return(
        <>
            <nav className='main'>
                <Link to='/' className='link'>Features</Link>
                <Link to='/' className='link'>Business</Link>
                <Link to='/' className='link'>Help</Link>
                <Link to='/' className='link'>Company</Link>

                <button type='submit'>Log in</button>
            </nav>

            <button className="mobile" onClick={() => setOpen(!open)}>
              <i className={`fa-solid fa-${open ? 'times' : 'ellipsis-vertical'} fa-2x`}></i>
            </button>
            {
              open && (
                <nav className={open ? 'mobilenav show' : 'mobilenav'}>
                  <Link to='/' className='link'>Features</Link>
                  <Link to='/' className='link'>Business</Link>
                  <Link to='/' className='link'>Help</Link>
                  <Link to='/' className='link'>Company</Link>

                  <button type='submit'>Log in</button>
                </nav>
              )
            }
        </>
    )
}

export default Navbar
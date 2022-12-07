import React, { className } from 'react';


const Navbar = () => {
  return (
    <section className='navbar-container'>
      <nav className='navbar' >
        <h1 className='navbar-logo'></h1>
        <ul className='navbar-links'>
          <li>Home
          </li>
          <li>About Us</li>
          <li>Spaces
            <ul className='nb-nested'>
              <li>Closets</li>
              <li>Offices</li>
            </ul>
          </li>
          <li>Process</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar;
import React, { className } from 'react';


const Navbar = () => {
  return (
    <header>
        <h1 className='navbar-logo'></h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Spaces ></a>
            <ul>
              <li><a href="#">Closets</a></li>
              <li><a href="#">Offices</a></li>
            </ul>
          </li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us ></a>
            <ul>
              <li><a href="#">Call us at ###</a></li>
              <li><a href="#">Request a free consoltation</a></li>
              <li><a href="#">Request a call back</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
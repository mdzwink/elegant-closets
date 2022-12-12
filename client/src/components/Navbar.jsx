import React, { className, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <header>
        <Link to={'/'}><div className='navbar-logo' onClick={() => scrollToTop()}></div></Link>
      <nav>
      <ul>
          <li><Link to={'/'} className='link'>Home</Link></li>
          <li><Link to={'/about'} className='link'>About Us</Link></li>
          <li><Link to={'/spaces'} className='link'>Spaces +</Link>
            <ul>
              <li><Link to={'/spaces/closet'} className='link link-closet'><div className='wb'>closet</div></Link></li>
              <li><Link to={'/spaces/office'} className='link link-office'><div>office</div></Link></li>
              <li><Link to={'/spaces/garage'} className='link link-garage'><div>garage</div></Link></li>
              <li><Link to={'/spaces/pantrie'} className='link link-pantrie'><div>pantrie</div></Link></li>
              <li><Link to={'/spaces/garage-floor'} className='link link-garage-floor'><div>garage floor</div></Link></li>
            </ul>
          </li>
          <li><Link to={'process'} className='link'>Process</Link></li>
          <li><Link to={'blog'} className='link'>Blog</Link></li>
          <li><Link to={'contact'} className='link'>Contact Us +</Link>
            <ul>
              <li><Link to={'call'} className='link'>Call us at ###</Link></li>
              <li><Link to={'request/consolt'} className='link'>Request a free consoltation</Link></li>
              <li><Link to={'request/call-back'} className='link'>Request a call back</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
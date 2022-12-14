import React, { className, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [contactPopout, setContactPopout] = useState(false);
  
  const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const handleContactPopoutToggle = (e) => {
    e.preventDefault()
    contactPopout ? setContactPopout(false) : setContactPopout(true);
    console.log(contactPopout)
  }

  return (
    <header>
        <Link to={'/'}><div className='navbar-logo' onClick={() => scrollToTop()}></div></Link>
      <nav>
      <ul>
          <li onClick={() => scrollToTop()} ><Link to={'/'} className='link'>Home</Link></li>
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
          <li className='link link-contact'>
            <a className='link' onClick={(e) => handleContactPopoutToggle(e)}>
              Contact Us + 
            </a>
            <div className={contactPopout ? "contact-popout active" : "contact-popout"}>
              <form action="#" className="contact-form">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='email/phone-number'/>
                <p>'What service are you looking for?'</p>
                <input type="checkbox" placeholder='Closet, Pantry or Office'/>
                <input type="checkbox" placeholder='Garage Flooring'/>
                <input type="checkbox" placeholder='Other'/>
                <button>Submit</button>
              </form>
            </div>
          </li>
          <li className="link">
            <div className="social-nav-container">
              <a href='https://www.facebook.com/ElegantClosets.ca/' target='_blank' className='social-nav-fb'><FontAwesomeIcon icon={faFacebook} /></a>
              <a href='https://www.pinterest.ca/elegantcustom/' target='_blank' className='social-nav-pi'><FontAwesomeIcon icon={faPinterest} /></a>
              <a href='https://www.instagram.com/elegantclosets.ca/' target='_blank' className='social-nav-in'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
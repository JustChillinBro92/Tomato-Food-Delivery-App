import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import {assets} from '../../assets/assets.js'
import './Navbar.css'

const Navbar = () => {
  const[menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo3} alt=''/>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
        <a href='#restaurant-display' onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>Restaurants</a>
        <a href='#' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
        <div className='navbar-cart-icon'>
          <FontAwesomeIcon icon={faCartShopping} shake />
          <div className='dot'></div>
        </div>
        <button className='sign-in'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
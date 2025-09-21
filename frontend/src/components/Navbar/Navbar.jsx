import { useState }from 'react'
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
        <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>Restaurants</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</li>
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
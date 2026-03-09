import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass, 
  faCartShopping, 
  faCircleUser,
  faBasketShopping, 
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

import {assets} from '../../assets/assets.js'
import { StoreContext } from '../../context/StoreContext.jsx'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {
  const navigate = useNavigate();
  const[menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const handleSignIn = () => {
    setShowLogin(true);
    document.body.style.overflow = 'hidden';
  }

  const OnLogOut = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate("/");
    window.location.reload();
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo3} alt=''/></Link>
      
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
        {/* <a href='#restaurant-display' onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>Restaurants</a> */}

        <Link to="/#restaurant-display" onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>Restaurants</Link>
        <a href='#' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
      </ul>

      <div className='navbar-right'>
        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
        <div className='navbar-cart-icon'>
          <Link to='/cart'><FontAwesomeIcon icon={faCartShopping}/></Link>
          <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
          {!token? ( 
            <button className='sign-in' onClick={handleSignIn}>Sign in</button>
          ) : ( 
          <div className='nav-profile'>
            <FontAwesomeIcon icon={faCircleUser} className='nav-profile-icon'/>
            <ul className='nav-profile-dropdown'>
              <li><Link to='/myorders'><FontAwesomeIcon icon={faBasketShopping} className='nav-icon'/>Orders</Link></li>
              <li onClick={OnLogOut}><FontAwesomeIcon icon={faArrowRightToBracket} className='nav-icon'/>Logout</li>
            </ul>
          </div> 
          )}
      </div>
    </div>
  )
}

export default Navbar
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass, 
  faCartShopping, 
  faCircleUser,
  faBasketShopping, 
  faArrowRightToBracket,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

import {assets} from '../../assets/assets.js'
import { StoreContext } from '../../context/StoreContext.jsx'
import './Navbar.css'

const Navbar = ({setShowLogin, setSearchFood}) => {
  const navigate = useNavigate();
  const[menu, setMenu] = useState('home');
  const[searchClick, setSearchClick] = useState(false);
  const[profileClick, setProfileClick] = useState(false);
  const [foodParam, setFoodParam] = useState("");

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
  const onChangeHandler = (event) => {
    const food = event.target.value;
    setFoodParam(food);
  }
  const handleSearch = () => {
    setSearchFood(foodParam);
  }

  const handleClick = (category) => {
    switch(category) {
      case "logo":
        navigate("/");
        window.location.reload();
      case "profile": 
        setProfileClick(!profileClick);
        break;              
      case "search":
        setSearchClick(!searchClick);
        break; 
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={assets.logo3} alt=''
        onClick={()=>handleClick("logo")}/>
      </Link>
      
      {!searchClick ? (
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
          <Link to="/#restaurant-display" onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>Restaurants</Link>
          <a href='#' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
          <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
        </ul>
        ) : (
          <div className='searchBar'>
            <input type="text" placeholder='Search for food...'
            value={foodParam} onChange={onChangeHandler}/>
            <button onClick={handleSearch}>Search</button>
          </div>
        )}


      <div className='navbar-right'>
        <Link to='/search'>
          {!searchClick ? (
            <FontAwesomeIcon className='search-icon' 
            icon={faMagnifyingGlass} 
            onClick={()=>handleClick("search")}/>
          ) : (
            <FontAwesomeIcon className='search-icon' 
            icon={faCircleXmark} 
            onClick={()=>handleClick("search")}/>
          )}
        </Link>

        <div className='navbar-cart-icon'>
          <Link to='/cart'><FontAwesomeIcon icon={faCartShopping}/></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

          {!token ? ( 
            <button className='sign-in' onClick={handleSignIn}>Sign in</button>
          ) : ( 
          <div className={profileClick === true ? 'nav-profile-clicked' : 'nav-profile'} onClick={()=>handleClick("profile")}>
            <FontAwesomeIcon icon={faCircleUser} className='nav-profile-icon'/>
            <ul className='nav-profile-dropdown'>
              <li><Link to='/myorders'><FontAwesomeIcon icon={faBasketShopping} className='nav-icon'/>My Orders</Link></li>
              <li onClick={OnLogOut}><FontAwesomeIcon icon={faArrowRightToBracket} className='nav-icon'/>Logout</li>
            </ul>
          </div> 
          )}
      </div>
    </div>
  )
}

export default Navbar
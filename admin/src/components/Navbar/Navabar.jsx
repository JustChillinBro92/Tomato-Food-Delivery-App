import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-contents'>
            <img className="logo" src={assets.logo} alt="" />
            <div className='admin-profile'>
                <h3 className="name">Ayan Purkait</h3>
                <FontAwesomeIcon className="profile-icon" icon={faCircleUser}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
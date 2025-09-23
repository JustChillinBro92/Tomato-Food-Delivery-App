import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { assets } from '../../assets/assets.js'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className='footer-logo' src={assets.logo3} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut atque doloremque in consectetur placeat ex sapiente aperiam, pariatur incidunt, distinctio tempora. Dolorem maxime earum id vero commodi nam nemo!</p>
                <div className='footer-social-icons'>
                    <FontAwesomeIcon icon={faFacebookF} className='social-icon'/>
                    <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
                    <FontAwesomeIcon icon={faLinkedinIn} className='social-icon'/>
                </div>
                
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2025 © Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState('Sign Up');

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <FontAwesomeIcon className='cross-icon' icon={faCircleXmark} onClick={()=>setShowLogin(false)}/>
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login'
                ?<></>
                :<input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Your password' required/>
            </div>
            <button>{currState==='Sign Up'?'Create an account' : 'Login'}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==='Login'
            ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Click here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup
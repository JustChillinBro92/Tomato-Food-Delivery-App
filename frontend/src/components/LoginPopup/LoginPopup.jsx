import { useContext, useEffect, useState } from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import { StoreContext } from '../../context/StoreContext'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Sign Up');
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleCrossIcon = () => {
    setShowLogin(false);
    document.body.style.overflow = '';
  }

  const OnChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const OnLogin = async (event) => {
    event.preventDefault();
    document.body.style.overflow = '';

    let new_url = url;
    if(currState === 'Login')
      new_url += '/api/user/login';
    else new_url += '/api/user/register';

    const response = await axios.post(new_url, data);
    if(response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
      window.location.reload();
    } else {
      alert(response.data.message);
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // },[data])

  return (
    <div className='login-popup'>
        <form onSubmit={OnLogin} className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <FontAwesomeIcon className='cross-icon' icon={faCircleXmark} onClick={handleCrossIcon}/>
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login'
                ?<></>
                :<input type='text' name='name' onChange={OnChangeHandler} value={data.name} placeholder='Your name' required/>}
                <input type='email' name='email' onChange={OnChangeHandler} value={data.email} placeholder='Your email' required/>
                <input type='password' name='password' onChange={OnChangeHandler} value={data.password} placeholder='Your password' required/>
            </div>
            <button type='submit'>{currState==='Sign Up'?'Create an account' : 'Login'}</button>
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
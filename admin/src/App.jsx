import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Navbar from './components/Navbar/navabar'
import Sidebar from './components/Sidebar/Sidebar'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import AddFood from './pages/AddFood/AddFood'
import ListRestaurants from './pages/ListRestaurants/ListRestaurants'
import ListFoods from './pages/ListFoods/ListFoods'
import Orders from './pages/Orders/Orders'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  // const url = 'https://tomato-backend-av7d.onrender.com';
  const url = 'http://localhost:4000';

  return (
    <div className='app'>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <ToastContainer/>
        <Routes>
          <Route path='/add-restaurant' element={<AddRestaurant backend_url={url}/>}/>
          <Route path='/add-food' element={<AddFood backend_url={url}/>}/>
          <Route path='/list-restaurants' element={<ListRestaurants backend_url={url}/>}/>
          <Route path='/list-food' element={<ListFoods backend_url={url}/>}/>
          <Route path='/orders' element={<Orders backend_url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
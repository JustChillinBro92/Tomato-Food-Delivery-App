import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Navbar from './components/Navbar/navabar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <ToastContainer/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
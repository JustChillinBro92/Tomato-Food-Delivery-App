import React from 'react'
import Navbar from './components/Navbar/navabar'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
import React from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Doctors from './Components/Doctors'
import Consults from './Components/Consult/consult'



export default function App() {
  return (
    <Router>
      <div>
        <div>
          <Header/>
          <Routes>
            
            <Route exact path='/' element={<Body/>} />
            <Route path='Doctors' element={<Doctors />} />
            <Route exact path='Consult' element={<Consults/>} />
            
            
          </Routes>
          <Footer/>
          
        </div>
      </div>
    </Router>
  )
}

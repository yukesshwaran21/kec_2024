import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Navbar from './Navbar'
import Contact from './Contact'
import Gallery from './Gallery'
import About from './About'
import Footer from './Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { FaLess } from 'react-icons/fa6'
import LoginPopUp from './components/LogInPopUp/LoginPopUp'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPopUp setShowLogin= {setShowLogin}/> : <> </>}
      <div className='app'>
        <NavBar setShowLogin= {setShowLogin}/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/placeorder' element={<PlaceOrder/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      <Footer/>
     </>
  )
}

export default App

import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CatagoriesList from './Body/HeaderComponent/CatagoriesList'
import Navbar from './Body/HeaderComponent/Navbar'
import Main from './Body/Main'
import { UserContextUiUx } from './context/UserUiUx'
import Login from './Login'
import ProductPage from './ProductPage'


import 'react-toastify/dist/ReactToastify.css';
import Profile from './Body/Profile'
export default function Body() {

  const {ShowSlide} = useContext(UserContextUiUx)
  
  return (
    <BrowserRouter >

      <Navbar />
      
       <Routes>
          <Route path='/' element=<Main /> />
          <Route path='/Product/:Product_id' element=<ProductPage /> />
          <Route path='/CatagoriesList' element=<CatagoriesList /> />
          <Route path='/LogIn' element=<Login /> />
          <Route path='git g' element=<Profile /> />
       </Routes>
       
       <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
      <ToastContainer />

    </BrowserRouter>
  )
}

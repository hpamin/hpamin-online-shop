import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { UserContextUiUx } from '../context/UserUiUx'
import useWindowDimensions from '../WidthScreen'
import Blogs from './MainComponent/Blogs'
import Category from './MainComponent/Category'
import Footer from './MainComponent/Footer'
import Header from './MainComponent/Header'
import NavBottom from './MainComponent/NavBottom'
import Offers from './MainComponent/Offers'
import Options from './MainComponent/Options'
import SuggestProducts from './MainComponent/SuggestProducts'


export default function Main() {

    const {ShowSlide, setShowSlide} = useContext(UserContextUiUx)
    
    const {setSetting} = useContext(UserContext)

    const {width} = useWindowDimensions()

    function handleHide() {
      setShowSlide(false)
      setSetting(false)
    } 

  return (
    <main onClick={handleHide}>
        
        <Header />
        <Offers />
        <Options />
        <Category />
        <SuggestProducts />
        <Blogs />
        <Footer />

        {width < 480 && <NavBottom />}

    </main>
  )
}

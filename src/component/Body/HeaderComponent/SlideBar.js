import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../../../Slide.css'
import { UserContextUiUx } from '../../context/UserUiUx'
import Search from '../BodyComponent/Search'

export default function SlideBar() {

    const{setShowSlide,  ShowSlide, colorDark, theme, setShowSearch} = useContext(UserContextUiUx)



  return (
    <>
      <div id="mySidenav" className="sidenav" style={{width: ShowSlide && "250px" }} >
          
          <h3 href="javascript:void(0)" className="closebtn text-white" onClick={()=>setShowSlide(false)}>&times;</h3>

          <NavLink onClick={()=>setShowSlide(false)} to='/'>Home</NavLink>
          <NavLink onClick={()=>setShowSlide(false)} to=''>About</NavLink>
          <NavLink onClick={()=>setShowSlide(false)} to=''>Services</NavLink>
          <NavLink onClick={()=>setShowSlide(false)} to='/CatagoriesList'>Catagories</NavLink>
          <NavLink onClick={()=>setShowSlide(false)} to='/'>offers</NavLink>
          <NavLink onClick={()=>setShowSlide(false)} to='/LogIn'>Log in</NavLink>
      </div>

      <Icon className='w-10 h-10 text-white' icon="ic:baseline-search" style={{color : theme==="light" && "#222121"}} onClick={()=>setShowSearch(true)} />
      
      <Icon className='text-5xl hover:scale-105' icon="ph:list-bold" style={colorDark} onClick={()=>setShowSlide(true)}  />
    </>
  )
}

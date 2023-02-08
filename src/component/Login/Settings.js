import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { UserContextUiUx } from '../context/UserUiUx'

export default function Settings() {
  
  const {theme, colorText, colorDark,  BgColorNav, ShowSearch, setShowSearch } = useContext(UserContextUiUx)
  
  const {user, setUser, Setting, setSetting} = useContext(UserContext)
  
   function handelLogOut() {
    setSetting(false)
    setUser(null)
    localStorage.removeItem("User")
   } 

   function handleHideSetting() {
    setSetting(false)
   }

  console.log(user);
    return (
    <div className='w-48 h-56 bg-purple-600 absolute rounded-xl flex flex-col px-2 py-3 justify-evenly' style={{top: 72}}>
        <h2 style={{color:'#FFD700'}}> Dear {user.firstName} {user.lastName}  </h2>
        <NavLink to='/Profile' className='text-white w-full hover:text-yellow-300' onClick={handleHideSetting}> Profile </NavLink>
        <hr />
        <NavLink className='text-white w-full hover:text-yellow-300' onClick={handleHideSetting}> Carts </NavLink>
        <hr />
        <NavLink className='text-white w-full hover:text-yellow-300' onClick={handleHideSetting}> Supports </NavLink>
        <hr />
        <NavLink className='text-white w-full hover:text-yellow-300' onClick={handelLogOut}> Log out </NavLink>
    </div>
  )
}

import { Icon } from '@iconify/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { UserContextUiUx } from '../context/UserUiUx'
import Personal from './Profile/Personal'

export default function Profile() {
    
  const {theme, colorText, colorDark,  BgColorNav, BgColor, ShowSearch, setShowSearch } = useContext(UserContextUiUx)
  
  const {user, setUser, Setting, setSetting, userData} = useContext(UserContext)

  const [personal , setPersonal] = useState(true)
  const [compony , setCompony] = useState(false)
  const [address , setAddress] = useState(false)
  const [cart , setCart] = useState(false)


  

  return (
    <section className='min-h-screen' onClick={()=>setSetting(false)} style={{...BgColor, paddingTop:70}} >
        
        <div className='w-full h-44 bg-cover bg-center relative' style={{backgroundImage:` linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)),url(https://picsum.photos/id/1/5000/4000?random=${Math.random()})`}}>
            
            <img className='border-8 border-amber-400 rounded-full bg-white w-44 absolute left-36' style={{...BgColor, bottom: -100}} src={user.image} />
        </div>
        <div className='w-full h-28 flex justify-center py-2' style={BgColorNav}>
            <div className='w-2/4 h-full flex justify-between items-center'>
                <h2 className='text-2xl' style={colorDark}> {user.firstName} {user.lastName} </h2>
                <h2 className='text-xl' style={colorDark}> {user.email} </h2>
            </div>
        </div>

        <div className='w-full h-full flex'>
            
            <div className='w-48 h-96 flex flex-col justify-evenly' style={{...BgColorNav, height:395 }}>
              <button className='w-full h-full hover:text-yellow-500 text-purple-600 duration-150' onClick={()=>{setPersonal(true); setCompony(false); setCart(false); setAddress()}}> Personal </button>
              <hr className='w-2/3 flex mx-auto' style={colorDark} />

              <button className='w-full h-full hover:text-yellow-500 text-purple-600 duration-150' onClick={()=>{setPersonal(false); setCompony(true); setCart(false); setAddress(false)}}> Compony </button>
              <hr className='w-2/3 flex mx-auto' style={colorDark} />

              <button className='w-full h-full hover:text-yellow-500 text-purple-600 duration-150' onClick={()=>{setPersonal(false); setCompony(false); setCart(false); setAddress(true)}}> Address </button>
              <hr className='w-2/3 flex mx-auto' style={colorDark} />

              <button className='w-full h-full hover:text-yellow-500 text-purple-600 duration-150'> info </button>

              <hr className='w-2/3 flex mx-auto' style={colorDark} />
              <button className='w-full h-full hover:text-yellow-500 text-purple-600 duration-150' onClick={()=>{setPersonal(false); setCompony(false); setCart(true);setAddress(false)}}> Cart </button>
            </div>
              
            <div className='w-full flex justify-center' style={{height: 395}}>

              <Personal />
                
             

            </div>
        </div>


    </section>
  )
}

import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import { UserContextUiUx } from '../../context/UserUiUx'
import DarkMoodSwitch from '../../DarkMoodSwitch'
import Settings from '../../Login/Settings'
import useWindowDimensions from '../../WidthScreen'
import Search from '../BodyComponent/Search'
import SlideBar from './SlideBar'

export default function Navbar() {


  const {theme, colorText, colorDark,  BgColorNav, ShowSearch, setShowSearch } = useContext(UserContextUiUx)

  const {user, setUser, Setting, setSetting, stockNum , setStockNum} = useContext(UserContext)

  const {width} = useWindowDimensions()

   function handleSetting() {
    if(Setting === false){
        setSetting(true)
    }else if(Setting === true){
        setSetting(false)
    }

   }

  return (
    <nav style={BgColorNav}>
        
            <div className={`flex w-full h-full ${width < 769 && "flex justify-between p-2" }`}>

                

                {width > 769 ? 
                <>
                    <div className={`${width > 769 ? "w-64 flex items-center justify-around " : "w-44 h-full flex justify-between items-center" }`}>

                      <NavLink to='/' className='text-white text-xl font-bold' style={{color:theme==="dark" && "blueviolet"}}><span style={{color:theme==="light" ? "blueviolet" : "white"}}>HP</span>amin</NavLink>

                    {user &&
                        <div className='w-5 h-full flex items-center justify-center'>
                            <NavLink  className={`text-5xl rounded-xl shadow-2xl hover:shadow-inner relative ${theme === "light" ? "bg-purple-600" : "bg-yellow-400"}`} style={{}}>
                                    <Icon className='text-white p-2 shadow-2xl' icon="ph:shopping-cart-light"/>
                                    {user &&
                                        <h4 className={`text-sm text-center absolute rounded-full w-5 font-mono -bottom-1 right-0 font-bold ${theme === "light" ? "bg-yellow-400" : "bg-purple-600"}`} style={colorDark}> {stockNum} </h4>
                                    }
                            </NavLink>
                        </div>                    
                    }

                      <DarkMoodSwitch />
                    </div>

                    <div className='w-8/12 flex items-center justify-around'>

                        <Search />
                        <NavLink className='w-1/5' style={colorText}>About us</NavLink>
                        <NavLink className='w-1/5' style={colorText} to='/CatagoriesList'>Catagories</NavLink>
                        <NavLink className='w-1/5' style={colorText}>offers</NavLink>


                    </div>
                    {user ? 
                        <div className='w-1/6 flex items-center justify-evenly relative'>
                            <div className='flex items-center gap-1 hover:scale-105 duration-150 hover:shadow-xl cursor-pointer' onClick={handleSetting}> 
                                {Setting ? 
                                    <Icon className='text-lg' style={colorDark}icon="material-symbols:arrow-drop-down-circle-outline" rotate={2} />
                                    :
                                    <Icon className='text-lg' style={colorDark} icon="material-symbols:arrow-drop-down-circle-outline" />
                                }
                                <h3 className='text-xl' style={colorDark}> {user.username} </h3>
                                <img className='w-14 rounded-full' src={user.image} />
                             </div>
                             {Setting === true && <Settings /> }
                        </div>
                    :
                    <div className='w-2/12 flex items-center justify-evenly'>
                        <NavLink to='/LogIn' className='btn flex items-center justify-center'>Log In</NavLink>
                    </div>
                    }
                </>
                :
                ShowSearch ? 

                <div className='w-full flex items-center justify-evenly'>
                    <h3 href="javascript:void(0)" className="closebtn text-white text-4xl" onClick={()=>setShowSearch(false)}>&times;</h3>
                    <Search/> 
                </div>

                    :
                <>
                <div className={`${width > 769 ? "w-64 flex items-center justify-around " : "w-44 h-full flex justify-between items-center" }`}>

                  <NavLink to='/' className='text-white text-xl font-bold' style={{width:'10%', color:theme==="dark" && "blueviolet"}}><span style={{color:theme==="light" ? "blueviolet" : "white"}}>HP</span>amin</NavLink>

                  <DarkMoodSwitch />
                </div>

                <div className='w-1/4 h-full flex items-center justify-evenly '>
                    <SlideBar />
                </div>
                </>
                
                }

            </div>
        </nav>
  )
}

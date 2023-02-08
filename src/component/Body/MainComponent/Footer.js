import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import useWindowDimensions from '../../WidthScreen'

export default function Footer() {

    const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark} = useContext(UserContextUiUx)

    const {width} = useWindowDimensions()
  
    return (
      <section className={`w-full flex justify-evenly items-center ${width > 768 ? "px-16  h-44" : "px-5 flex-wrap h-full gap-2"}`} style={BgColorNav}>

        <div className={`${width > 768 ? "w-2/6" : "w-fit"}`}> 

            <NavLink to='/' className='footerLogo w-full flex justify-center' style={{color:theme==="dark" && "blueviolet"}}><span className='footerLogo' style={{color:theme==="light" ? "blueviolet" : "white"}}>HP</span>amin</NavLink>

            <div className='w-full flex flex-col items-center justify-center mt-2 gap-1'>
                <h2 className={`font-mono ${width < 768 && "text-sm"}`} style={colorDark}> Enter your email to get the best discount: </h2>
                <form className='flex w-80 h-10'>
                    <button type="submit" className='footerbtn bg-purple-600 w-full h-full flex items-center justify-center rounded-tl-xl rounded-bl-xl text-white' > send </button>
                    <input type="email" className='rounded-tr-xl rounded-br-xl pl-5 outline-none' id='email' placeholder='send your email ' />
                </form>
            </div>

        </div>

        <div className={`flex flex-col items-center ${width > 768 ? "w-1/6" : "w-full"} `}>
            <h2 className='text-2xl font-bold' style={{color:'blueviolet'}}> About us </h2>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> Address </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> Contact us </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> Support </NavLink>
        </div>

        <div className={`flex flex-col items-center ${width > 768 ? "w-1/6" : "w-full"} `}>
            <h2 className='text-2xl font-bold' style={{color:'blueviolet'}}> Profile</h2>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> your profile </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> profile settings </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> profile photo </NavLink>
        </div>

        <div className={`flex flex-col items-center ${width > 768 ? "w-1/6" : "w-full mb-5"} ${width < 480 && "mb-20"} `}>
            <h2 className='text-2xl font-bold' style={{color:'blueviolet'}}> Cart </h2>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> your carts </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> your purchase </NavLink>
            <NavLink className='hover:scale-110 duration-200' style={colorDark}> your buy </NavLink>
        </div>

      </section>
  )
}

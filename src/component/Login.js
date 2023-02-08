import React, { useContext, useState } from 'react'
import { UserContextUiUx } from './context/UserUiUx'

import {json, useNavigate} from "react-router-dom"

import '../login.css'
import Hello from "../img/Hello.gif";
import { Icon } from '@iconify/react';
import useWindowDimensions from './WidthScreen';
import { UserContext } from './context/UserProvider';

export default function Login() {
  
    /*****UseState*****/
    const [input, setInput] = useState('')
    const [ShowPassword , setShowPassword] = useState(false)
    const {width} = useWindowDimensions()
    
    /*****User Context*****/
    const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor, colorDark, setShowSlide} = useContext(UserContextUiUx)
    const {LoginApi, user} = useContext(UserContext)
    
    const navigate = useNavigate()

    async function handleSubmit(e) {
      console.log("user: kminchelle");
      console.log("pass : 0lelplR");
      console.log(user);
      
      e.preventDefault()

      const username = e.target.elements.username.value
      const password = e.target.elements.password.value
      
      await LoginApi({username, password})
      localStorage.getItem('User') && navigate('/')
    }
  

    return (
        <section className='w-full h-screen' onClick={()=>setShowSlide(false)}>
            <div class="login">
                <div class="inner-header flex flex items-end justify-center">

                  <div className={`loginInfo flex flex-row-reverse rounded-xl ${width < 959 && "justify-center"}`} style={BgColor}>
                    {width > 959 &&
                    <div className='w-2/4 py-2 pr-2 flex flex-col justify-between'>
                        
                        <img className='w-full h-full bg-cover bg-center object-cover shadow-xl rounded-lg' src={Hello} />
                    </div>
                    }

                    <form className={`h-full flex flex-col ${width > 959 ? "w-2/4 pl-5" : "w-full"}`} style={{padding:width < 450 && "10px 20px"}} onSubmit={handleSubmit}>

                      <div className='w-full h-40 flex flex-col  justify-evenly'>
                        <h2 className={`${width > 450 ? " text-4xl" : " text-2xl"}`} style={colorDark}> Welcome Back Dear </h2>
                        <h2 className={`text-sm text-center ${width > 450 ? "px-9" : "px-3"}`} style={colorDark}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </h2>
                      </div>

                    <div className={`w-full  flex flex-col items-center justify-start gap-2`} style={{height:"70%"}}>

                          <div className={`w-fit flex flex-col items-start gap-2  ${width > 450 && "gap-2 "}`}>
                            <h2 style={colorDark}> Username : </h2>

                              <div className={`border-2 flex items-center rounded-md border-purple-700 ${width > 959 ? "w-96 " : "w-full"} `}>

                                <input type='text' name="username" id='username' className={`bg-transparent outline-none pl-4 w-full ${width > 450 ? "h-12" : "h-10"}`} style={colorDark} placeholder='Enter your Username' />

                                <label htmlFor='username'>
                                  <Icon icon="mdi:user" className='text-3xl mr-2' style={colorDark} />
                                </label>
                              </div>

                          </div>

                          <div className={`w-fit flex flex-col items-start  ${width > 450 && "gap-1 "}`}>
                            <h2 style={colorDark}> Password : </h2>

                            <div className={`border-2 flex items-center rounded-md border-purple-700 ${width > 959 ? "w-96 " : "w-full"} `}>

                                <input  type={`${ShowPassword ? "text" : "password"}`} name="password" id='Password' className={`bg-transparent outline-none pl-4 w-full ${width > 450 ? "h-12" : "h-10"}`} style={colorDark} placeholder='Enter your Password' />

                                <label htmlFor='Password'>                          
                                  {ShowPassword ?
                                    <Icon icon="mdi:eye-off"  className='text-3xl mr-2' style={colorDark} onClick={()=>setShowPassword(false)} />
                                    :
                                    <Icon icon="ic:sharp-remove-red-eye"  className='text-3xl mr-2' style={colorDark}  onClick={()=>setShowPassword(true)} />
                                  }
                                </label>
                            </div>
                          </div>

                           {/* bg-transparent outline-none pl-4 w-full h-10 cursor-pointer */}

                          <div className='panel pink w-full'>
                              <button type='submit' className='btn-5 rounded-md' > Log in </button>
                          </div>

                          <div className={`w-full flex justify-center gap-5  ${width > 450 ? "mt-5" : "mt-2"}`}>
                                  
                                  <a href='#'>
                                  <Icon className={`icon text-white`} style={{ backgroundColor:"blueviolet"}}  icon="simple-line-icons:social-twitter" />
                                  </a>
                                  <a href='#'>
                                  <Icon className={`icon text-white`} style={{ backgroundColor:"blueviolet"}}  icon="ph:instagram-logo-light" />
                                  </a>
                                  <a href='#'>
                                  <Icon className={`icon text-white`} style={{ backgroundColor:"blueviolet"}}  icon="fontisto:telegram" />
                                  </a>
                          </div>

                    </div>

                    </form>

                  </div>
                </div>

                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                    <use xlinkHref='#gentle-wave' x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref='#gentle-wave' x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref='#gentle-wave' x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref='#gentle-wave' x="48" y="7" fill="#fff" />
                    </g>
                    </svg>
                </div>

              </div>

            
        </section>
  )
}

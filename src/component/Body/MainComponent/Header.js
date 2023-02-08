import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContextUiUx } from '../../context/UserUiUx'
import DarkMoodSwitch from '../../DarkMoodSwitch'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Search from '../BodyComponent/Search'
import useWindowDimensions from '../../WidthScreen'


export default function Header() {

  const {theme, colorText, colorStroke, BgColorNav, BgColor, colorLight, borderColor} = useContext(UserContextUiUx)
  
  const headerSwiper = [
    {categori: 'Men clothes', caption: 'High variety of clothes', bg : 'bg-menStyle' },
    {categori: 'Girl clothes', caption: 'High variety of clothes', bg : 'bg-girlStyle' },
    {categori: 'jewelry', caption: 'High variety of clothes', bg : 'bg-jewelery' }
  ]

const {width} = useWindowDimensions()

  return (
    <section className='header w-full ' style={BgColor}> 

        <div className='w-full h-full flex items-center'>

          <Swiper
              spaceBetween={30}
              pagination={{
                clickable:true
              }} 
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true
              }}
              modules={[Pagination, Autoplay ]}
              className={`mySwiper ${width > 768 ? 'mt-28' : 'mt-11' } `}>

            {headerSwiper.map((item)=>
              <SwiperSlide>
                <div  className={`${item.bg} SwiperSizeBg`}>

                  <div className='glass glassWidth'>

                      <div className='w-full h-full flex flex-col items-start justify-around px-10 py-2'>
                        <h2 className='text-4xl font-semibold' style={colorStroke}>{item.categori}</h2>
                        <h3 className='text-2xl' style={colorLight}>{item.caption}</h3>
                        
                        <h4 className='text-sm font-mono'> (Free shipping on purchases over $400) </h4>

                        <NavLink className="NavBtn" style={{color: theme==="dark" && 'white',borderColor : theme==="light" ? "#222121" : 'white'}} >to see more click</NavLink>
                        
                      </div>
                    </div>

                </div>
              </SwiperSlide>)}

          </Swiper>
        </div>
       
    </section>
  )
}

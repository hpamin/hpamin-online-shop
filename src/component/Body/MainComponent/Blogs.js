import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContextUiUx } from '../../context/UserUiUx'
import useWindowDimensions from '../../WidthScreen'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

export default function Blogs() {

    const {width} = useWindowDimensions()
    const {theme, colorText, colorLight, BgColor, colorDark, BgColorNav} = useContext(UserContextUiUx)

    const [quotes] = useProduct('quotes?limit=10&skip=20')


    return (
      <section className='w-full flex flex-col justify-center items-center'  style={{...BgColor,height: width > 769 ? "60vh" : "calc(50vh + 4rem)"}}>

            <div className='w-full justify-center'>
                <h3 className={` items-start text-center  ${width > 640 ? "text-5xl my-10" : "text-xl my-5" }`} style={colorDark}>- - Quotes - -</h3>
            </div>

        <div className='w-full flex items-center flex-wrap px-5'>
             
            <Swiper
                spaceBetween={45}
                pagination={{
                clickable:true
                }} 
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter:true
                }}
                modules={[Pagination, Autoplay ]}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 40
                    },
                    769: {
                      slidesPerView: 3,
                      spaceBetween: 40
                    },
                }}
                className="mySwiper">
                    
                {quotes?.quotes.map((item)=>
                <SwiperSlide className='mb-9'>
                    <div className='glass quotes h-36 px-5 pt-2'>
                        <div>
                            <div>
                                {/* <img src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random()*10)}.jpg`}/> */}
                            </div>
                            <h3 className='font-mono' style={{color:theme==="light" ? "blueviolet" : "white"}}> {item.author} </h3>
                            <h3 className='flex-1 flex-wrap break-words' style={colorDark}>{(item.quote)}</h3>
                        </div>
                    </div>
                </SwiperSlide>
                )}
            </Swiper>
        </div>
      </section>
  )
}
